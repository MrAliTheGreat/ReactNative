import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../component/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
    const [searchText, setSearchText] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [errorMessage, setErrorMessage] = useState("")

    const searchAPI = async (searchTerm) => {
        try{
            const response = await yelp.get("/search", {
                params: {
                    term: searchTerm,
                    limit: 50,
                    location: "Bloomington"
                }
            })
            setSearchResults(response.data.businesses)
        } catch(err){
            setErrorMessage("Something Went Wrong! :(")
        }
    }

    // This will execute on screen start up. So, we will have some results when we open up the screen instead of just a blank screen!
    useEffect(() => {
        searchAPI("Food")
    }, [])

    return(
        <View>
            <SearchBar
                searchText={searchText} 
                onChange={setSearchText}
                onSubmit={() => {searchAPI(searchText)}}
            />
        <Text>Number of search results: {searchResults.length}</Text>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({});

export default SearchScreen;

/*
    We need the value of search from child in the parent!
    So, we define the state var in parent!

    yelp is axios instance so we can use it to make requests

    The value that is passed to get will be concatenated to baseURL in axios
    We have to wait for the response to come back so we can either use .then() or add async to func declaration and use await before request
    response.data will be the JSON we get back from API!
    If we pass params as second value to get, it will be become like query params! (for example ?a=10&b=5)
    Since yelp API is looking for query string we are using params. Other APIs may act differently!

    Showing an error message to user means updating the screen and that means rerendering. State Var Baby!!!

    We NEVER call a function directly inside of our react component (main func) because it can cause an inifinite loop! (Problem I had in IE, Talked with Taha)

    useEffect is a hook that allows us to run some code just one time when our component is first rendered to the screen!
    useEffect(() => {})          --> This will run the given func EVERY TIME the component is rendered! a big no no!!!
    useEffect(() => {}, [])      --> This will run the given func ONLY when the component is FIRST rendered. What we want!
    useEffect(() => {}, [value]) --> This will run the given func ONLY when the component is FIRST rendered AND when the value changes! Cool!!!
*/