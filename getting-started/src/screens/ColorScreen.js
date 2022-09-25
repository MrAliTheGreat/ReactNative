import React, { useState } from "react";
import { View, Button, StyleSheet, FlatList } from "react-native";

const ColorScreen = () => {
    const [colors, setColors] = useState([]);
    return(
        <View>
            <Button title="Add Color" onPress={() => {
                setColors([...colors, randomRGB()])
            }}/>
            <FlatList
                keyExtractor={item => item} 
                data={colors}
                renderItem={({ item }) => {
                    return <View style={{height: 100, width: 100, backgroundColor: item}}/>
                }}
            />
        </View>
    );
}

const randomRGB = () => {
    const red = Math.ceil(Math.random() * 255)
    const green = Math.ceil(Math.random() * 255)
    const blue = Math.ceil(Math.random() * 255)

    return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({});

export default ColorScreen;

/*
    Since we are giving random color to view we won't add it to styles. We instead give style on the fly!
    ...array means get a copy of all elements of array. It can be used to make a new array and add elements of the array to it.
    Like [...array, element] --> This will take all the element of array and this new element to make a new array!
    Important thing to remember is that state var can not be changed directly
    So, something like var.push() is wrong!

    For key we can simply use the rgb value!
*/