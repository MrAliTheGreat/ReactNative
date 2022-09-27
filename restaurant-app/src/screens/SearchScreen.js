import React, {useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../component/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../component/ResultsList";

const SearchScreen = () => {
    const [searchText, setSearchText] = useState("")
    const [searchAPI, searchResults, errorMessage] = useResults()
    
    const filterResultsByPrice = (price) => {
        return searchResults.filter((result) => {
            return result.price === price
        })
    }

    return(
        <View style={{ flex: 1}}>
            <SearchBar
                searchText={searchText} 
                onChange={setSearchText}
                onSubmit={() => {searchAPI(searchText)}}
            />
            {
                errorMessage
                ? <Text>{errorMessage}</Text> 
                :
                <ScrollView>
                    <ResultsList title="Cost Effective" results={filterResultsByPrice("$")} />
                    <ResultsList title="Bit Pricer" results={filterResultsByPrice("$$")} />
                    <ResultsList title="Big Spender" results={filterResultsByPrice("$$$")} />
                    <ResultsList title="Mamma Mia!" results={filterResultsByPrice("$$$$")} />
                </ScrollView>
            }
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

    We have to extract logic from react component!
*/