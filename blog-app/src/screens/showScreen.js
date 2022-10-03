import React, { useContext } from "react";
import {View, Text, StyleSheet} from "react-native"

import { Context as BlogContext } from "../context/BlogContext";

const showScreen = ({ navigation }) => {
    const { state } = useContext(BlogContext)

    const blogPost = state.find((blogPost) => {
        return blogPost.id === navigation.getParam("id")
    })

    return(
        <View style={{alignItems: "center"}}>
            <Text style={{fontSize: 30, marginTop: 10}}>{blogPost.title}</Text>
            <Text style={{fontSize: 20, marginVertical: 100}}>{blogPost.content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({});

export default showScreen;