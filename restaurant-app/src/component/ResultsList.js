import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultsDetail from "./ResultsDetails";

const ResultsList = ( { title, results } ) => {
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
                        <ResultsDetail result={item}/>
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

export default ResultsList;