import React, {useContext} from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

import { Context as BlogContext } from "../context/BlogContext";
import { AntDesign } from "@expo/vector-icons" 

const indexScreen = ({ navigation }) => {
    const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext)

    return(
        <>
            <FlatList 
                keyExtractor={(post) => post.id}
                data={state}
                renderItem={({ item }) => {
                    return(
                        <TouchableOpacity onPress={() => {navigation.navigate("show", {id: item.id})}}>
                            <View style={styles.elementView}>
                                <Text style={styles.title}>
                                    {item.title}
                                </Text>
                                <TouchableOpacity onPress={() => {deleteBlogPost(item.id)}}>
                                    <AntDesign 
                                        name="delete"
                                        color={"red"}
                                        style={styles.delete}
                                    />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </>
    )
}

indexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => {
            return(
                <TouchableOpacity onPress={() => {navigation.navigate("create")}}>
                    <AntDesign 
                        name={"plus"}
                        style={{fontSize: 30, marginRight: 10}}
                        color={"blue"}
                    />
                </TouchableOpacity>
            )
        }
    }
}

const styles = StyleSheet.create({
    elementView: {
        marginHorizontal: 20,
        marginVertical: 5,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        borderColor: "lightgrey",
        borderWidth: 3,
        borderRadius: 10,
        backgroundColor: "#420420",
        shadowColor: "black",
        shadowOffset: {width: -2, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 5
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white"
    },
    delete: {
        fontSize: 30
    }
});

export default indexScreen;

/*
    If we want to access the data in the provider we have to use useContext hook!
    We have to pass our context obj to it!
    Context is like a channel or a pipe that passes the data
    Provider is like the root of data where the data is generated
    If we want to connect to this system and get our required data we have to use useContext hook. useContext is like a mean of connection!

    Whenever our screen is going to be rendered by react navigator the func that we declared in .navigateOptions will be executed automatically!
    With this function we can for example control the header and what happens in it!
    In the option we return, headerRight is one option we can set up
    We can assign a react component to headerRight and the element will be rendered on the right side of the header each time the screen is rendered! Cool!!!

    navigationOptions will have navigation obj as a prop! How convenient!
*/