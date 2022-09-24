import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
    const friends = [
        {name: "Friend #1", age: 11},
        {name: "Friend #2", age: 12},
        {name: "Friend #3", age: 13},
        {name: "Friend #4", age: 14},
        {name: "Friend #5", age: 15},
        {name: "Friend #6", age: 16},
        {name: "Friend #7", age: 17},
    ]
    return(
        <FlatList
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
            }}
        />
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25,
        marginVertical: 50
    }
})

export default ListScreen;

/*
    renderItem will be a func which will execute on each list element. Like mapping in react!
    So renderItem will convert obj to an element which can be rendered.
    In renderItem the item will have several fields but the field that we are interested in is item which is our object value
    { item } will only get the item field of the whole element which is our object value

    IMPORTANT!!!
    When creating lists we have to set a unique key value for each obj. Native will use these keys to map objs to elements on screen.
    By doing this, when removing an element from list, Native won't completely delete the whole list on screen and render the updated list again
    Instead it will only remove the specified element on screen using key!
    This can really help performance! Instead of removing the whole list on screen and rendering the new updated list
    It will just remove the specified element on screen. So a lot less resources used for rendering.

    2 ways to set unique keys:
    Add a new key to objs ==> Not that good: hard coding and setting unique values each time by ourself and compile time
    Add keys on the fly when using renderItem and using a field in each obj as a key to make each key unique. --> keyExtractor

    In keyExtractor each element will be the obj and we don't need to get only item field like in renderItem!

    By setting horizontal in FlatList props we can make the list horizontal
    For removing horizontal scroll we can use "showsHorizontalScrollIndicator={false}" as a prop for FlatList
*/