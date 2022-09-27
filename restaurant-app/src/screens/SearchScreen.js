import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../component/SearchBar";

const SearchScreen = () => {
    const [searchText, setSearchText] = useState("")

    return(
        <View>
            <SearchBar
                searchText={searchText} 
                onChange={(newText) => {
                    setSearchText(newText)
                }}
                onSubmit={() => {
                    // This is the place that API handling will go!
                    // The child will execute this but the parent is responsible for it
                    // Man this callback is cool!!!
                    console.log(searchText + " submitted!")
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({});

export default SearchScreen;

/*
    We need the value of search from child in the parent!
    So, we define the state var in parent!
*/