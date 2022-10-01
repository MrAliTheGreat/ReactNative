import React, {useContext} from "react";
import { View, StyleSheet } from "react-native";

import blogContext from "../context/blogContext";

const indexScreen = () => {
    const value = useContext(blogContext)

    return(
        <View>
            <Text>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({});

export default indexScreen;

/*
    If we want to access the data in the provider we have to use useContext hook!
    We have to pass our context obj to it!
    Context is like a channel or a pipe that passes the data
    Provider is like the root of data where the data is generated
    If we want to connect to this system and get our required data we have to use useContext hook. useContext is like a mean of connection!
*/