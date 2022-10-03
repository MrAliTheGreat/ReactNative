import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";

const createScreen = ({ navigation }) => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const { addBlogPost } = useContext(BlogContext)

    return(
        <View>
            <Text style={styles.text}> Title </Text>
            <TextInput style={styles.input} value={title} onChangeText={setTitle}/>
            <Text style={styles.text}> Content </Text>
            <TextInput style={styles.input} value={content} onChangeText={setContent}/>
            <Button title="Add Blog Post" onPress={() => {
                addBlogPost(title, content, () => {
                    navigation.navigate("index")
                })
                // navigation.navigate("index")   BAD!!!
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        margin: 5,
        fontSize: 25,
        fontWeight: "bold"
    },
    input: {
        fontSize: 15,
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 5,
        padding: 10,
        marginHorizontal: 10,
        marginBottom: 30
    },    
});

export default createScreen;

/*
    Navigating immediately after changing content is not a wiae move since maybe it would take sometime for that change to be commited
    Just think of an API request it can take some time to get the result so when we navigate immediately maybe the result is not received
    So, we have to wait until everything is set up to navigate to the other screen
*/