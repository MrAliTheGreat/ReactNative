import React from "react";
import {View, Text, StyleSheet} from "react-native";

const HomeScreen = () => {
    const username = "Ali"
    return(
        <View style = {styles.viewStyle}>
            <Text style = {styles.textStyle}>
                Hello {username}!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 50,
        fontWeight: "bold"
    },
    viewStyle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default HomeScreen;

/*
    Each react component (JS file we create) has 4 parts:
    1. Imports! react and react-native components like Text, View ... are usually imported in all react components
    2. The main func that shows the component
    3. Styles which is like css
    4. export which will allow us to use this file in other parts of our project. Like in App.js!
*/