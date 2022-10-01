import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";

import ResultsDetail from "./ResultsDetails";

const ResultsList = ( { title, results, navigation } ) => {
    return(
        <View style={styles.listView}>
            <Text style={styles.title}>{title}</Text>
            {
                results.length === 0
                ?
                <Text style={styles.notFound}> No Matches Found!</Text> 
                :
                <FlatList 
                keyExtractor={(result) => result.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                renderItem={({ item }) => {
                    return(
                        <TouchableOpacity onPress={() => {navigation.navigate("ResultsShow", {id: item.id})}}>
                            <ResultsDetail result={item}/>
                        </TouchableOpacity>
                    )
                }}
            />                
            }
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: "bold",
        marginLeft: 20,
        marginTop: 10
    },
    listView:{
        borderBottomColor: "lightgrey",
        borderBottomWidth: 1
    },
    notFound: {
        fontSize: 30,
        fontWeight: "bold",
        marginVertical: 100,
        color: "red",
        alignSelf: "center"
    }
});

export default withNavigation(ResultsList);

/*
    By wrapping an element with TouchableOpacity we can make it pressable by having onPress prop!

    Passing navigation obj all the way from a parent really sucks! So, we can use a tool called withNavigation
    withNavigation will take our element as input and will return a new version of our element that has DIRECT access to navigation obj from App.js! Really Cool!!!
    We use withNavigation in export line and we can use it as prop of our component! Direct access to navigation obj for navigating from different elements to other elements! Really cool!!!

    props is used to transfer info from PARENT to CHILD!
    Now we want to transfer info between to completely seperate components
    For this action we can pass another value to navigate function. An obj with parameters that we want
    Then in the screen that we are navigating to we will have the navigation obj and this obj provides a func namd getParam
    By passing the name of the param we used in the previous screen to this func we can get the value! How cool is that!!!
*/