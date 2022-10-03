import React, { useContext } from "react";
import {View, Text, StyleSheet} from "react-native"

import { Context as BlogContext } from "../context/BlogContext";

const showScreen = ({ navigation }) => {
    const { state } = useContext(BlogContext)

    const blogPost = state.find((blogPost) => {
        return blogPost.id === navigation.getParam("id")
    })

    return(
        <View>
            <Text>{blogPost.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({});

export default showScreen;