import React, {useContext} from "react";
import {StyleSheet} from "react-native"

import { Context as BlogContext } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const editScreen = ({ navigation }) => {
    const id = navigation.getParam("id")
    const { state, editBlogPost } = useContext(BlogContext)

    const blogPost = state.find((blogPost) => {
        return blogPost.id === id
    })

    return(
        <BlogPostForm 
            initialValues={{title: blogPost.title, content: blogPost.content}}
            onSubmit={(title, content) => {
                editBlogPost(id, title, content, () => {
                    navigation.pop()
                })
            }}
        />
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

export default editScreen

/*
    pop func in navigation obj will make the app go to the previous screen
    Imagine it like a stack. We took a certain path to get to the current screen. Each screen we have visitied is stacked up!
    So, when we call pop the latest screen will go away and the previous one will show up! It's exactly like going back! 
*/