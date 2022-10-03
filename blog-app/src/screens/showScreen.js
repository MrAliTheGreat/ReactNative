import React, { useContext } from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import { AntDesign } from "@expo/vector-icons"

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

showScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => {
            return(
                <TouchableOpacity onPress={() => {navigation.navigate("edit", {id: navigation.getParam("id")})} }>
                    <AntDesign
                        name={"edit"}
                        style={{fontSize: 30, marginRight: 10}}
                        color={"blue"}
                    />
                </TouchableOpacity>
            )
        }
    }
}

const styles = StyleSheet.create({});

export default showScreen;