import React, {useContext} from "react";
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from "react-native";

import { Context as BlogContext } from "../context/BlogContext";
import { AntDesign } from "@expo/vector-icons" 

const indexScreen = () => {
    const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext)

    return(
        <>
            <Button 
                title="Add Blog Post"
                onPress={addBlogPost}
            />
            <FlatList 
                keyExtractor={(post) => post.id}
                data={state}
                renderItem={({ item }) => {
                    return(
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
                    )
                }}
            />
        </>
    )
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
        backgroundColor: "#420420"
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
*/