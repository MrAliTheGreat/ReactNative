import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

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
                        <View style={styles.elementView}>
                            {
                                item.image_url
                                ?
                                <Image style={styles.image} source={{uri: item.image_url}}/>
                                :
                                <Image style={styles.image} source={require("../../assets/QuestionMark.jpg")}/>
                            }
                            <Text style={styles.businessName}>{item.name}</Text>
                            <Text style={styles.review}>{item.rating} Stars, {item.review_count} Reviews</Text>
                        </View>
                    )
                }}
            />                
            }
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 37,
        fontWeight: "bold",
        marginLeft: 20,
        marginTop: 10
    },
    listView:{
        borderBottomColor: "lightgrey",
        borderBottomWidth: 1,
    },
    elementView: {
        marginHorizontal: 8,
        marginTop: 15,
        marginBottom: 20,
        borderColor: "grey",
        borderWidth: 3,
        borderRadius: 10,
        padding: 12,
        backgroundColor: "#420420"
    },
    image: {
        height: 175,
        width: 275,
        borderRadius: 10
    },
    businessName: {
        fontWeight: "bold",
        fontSize: 27,
        marginVertical: 5,
        width: 275,
        color: "white"
    },
    review: {
        color: "lightgrey",
        fontSize: 14.5,
        marginLeft: 1
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