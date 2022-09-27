import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons"

const SearchBar = ({ searchText, onChange, onSubmit }) => {
    return(
        <View style={styles.view}>
            <Feather 
                name="search"
                style={styles.FeatherIcon}
            />
            <TextInput
                style = {styles.textInput}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Search"
                value={searchText}
                onChangeText={onChange}
                onEndEditing={onSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: "lightgrey",
        margin: 20,
        flexDirection: "row",
        borderRadius: 10,
    },
    textInput: {
        flex: 1,
        marginLeft: 15,
        fontSize: 20,
        fontWeight: "bold",
    },
    FeatherIcon: {
        fontSize: 25,
        marginVertical: 3,
        marginLeft: 5,
        alignSelf: "center"
    }
});

export default SearchBar;

/*
    Using Expo has its benefits! We can easily get icons for our project!
    By going to github.com/expo/vector-icons we can search for available icons
    There we can find a list that shows the icon, its name and the lib it comes from!
    Using Expo for project generation, we now can use all these libs without any installation! Nice!!!
    I used Feather lib! Now we can display it just like a react component!
    We just also pass a prop called name which its value will be the name of the icon found on the github page!
    size prop for icon will act like height and weight in Image! 25 to 30 is a good value for size of the icon!
    When we want to set the size of the icon in the styles we must use fontSize! Weird, I know!!!

    Putting alignItems center on parent will limit the size for textInput!
    It is better to never use alignItem center on the parent of TextInput!
    If we want to center other siblings of TextInput we can simply use alignSelf center for them instead!

    onEndEditing is a prop and it will execute when the user is done with inputting! Like, when pressing enter on keyboard or go on phone!

    Whenever we want to do something from parents side in the child we have to use CALLBACKS!

    For props, instead of using () => {funcName()} we can simply write funcName! Both of them are func declarations so it works!
*/