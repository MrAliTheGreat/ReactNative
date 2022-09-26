import React from "react";
import {View, Text, StyleSheet, Button, TouchableOpacity} from "react-native";

const HomeScreen = (props) => {
    const username = "Ali"
    return(
        <View style = {styles.viewStyle}>
            <Text style = {styles.textStyle}>
                Hello {username}!
            </Text>
            <Button 
                title="Go To List Screen"
                onPress={() => {
                   props.navigation.navigate("List")
                }}
            />
            <Button 
                title="Go To Image Screen"
                onPress={() => {
                   props.navigation.navigate("Image")
                }}
            />
            <Button 
                title="Go To Counter Screen"
                onPress={() => {
                   props.navigation.navigate("Counter")
                }}
            />
            <Button 
                title="Go To Color Screen"
                onPress={() => {
                   props.navigation.navigate("Color")
                }}
            />
            <Button 
                title="Go To Square Screen"
                onPress={() => {
                   props.navigation.navigate("Square")
                }}
            />
            <Button 
                title="Go To Text Screen"
                onPress={() => {
                   props.navigation.navigate("Text")
                }}
            />
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

    View type is used to wrap multiple elements in it. It's something like div in HTML!
    We can only return one element in our func
    So, if we want to show multiple elements we can wrap it in a view and return the signle view element

    Native has 2 ways of implementing buttons:
    Button --> primitive type, just understands press, used for simple interactions
    TouchableOpacity --> This can be used to detect press on any element, very customizable
    Button is self closing so it will be like <Button />
    When assigning value to title in Button we do NOT need {}

    TouchableOpacity is NOT self-closing!

    Having StackNavigatior show the page will pass props to the page which is a navigation obj. This obj can help us with many actions.
    The object passed is named props and it has one field named navigation. This field has the obj we are looking for!
    Navigate key in the navigation obj has a value which is a func that can change the content visible on the screen.
    If we pass the name of a route (page) to this func that page will show up
    But we HAVE to include the name of the route in the navigator in App.js
    React Navigator will automatically add a back button to return to the previous page! How convenient!!!

    We can use { navigation } instead of props in the input of func to just get the navigation element!
*/