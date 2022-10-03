import React, { useContext } from "react";
import { StyleSheet } from "react-native";

import { Context as BlogContext } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";


const createScreen = ({ navigation }) => {
    const { addBlogPost } = useContext(BlogContext)

    return(
        <BlogPostForm onSubmit={(title, content) => {
            addBlogPost(title, content, () => {
                navigation.navigate("index")
            })
        }}/>
    )
}

const styles = StyleSheet.create({});

export default createScreen;

/*
    Navigating immediately after changing content is not a wiae move since maybe it would take sometime for that change to be commited
    Just think of an API request it can take some time to get the result so when we navigate immediately maybe the result is not received
    So, we have to wait until everything is set up to navigate to the other screen
*/