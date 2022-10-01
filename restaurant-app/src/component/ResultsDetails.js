import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultsDetail = ({ result }) => {
    return(
    <View style={styles.elementView}>
        {
            result.image_url
            ?
            <Image style={styles.image} source={{uri: result.image_url}}/>
            :
            <Image style={styles.image} source={require("../../assets/QuestionMark.jpg")}/>
        }
        <Text style={styles.businessName}>{result.name}</Text>
        <Text style={styles.review}>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    elementView: {
        marginHorizontal: 8,
        marginTop: 15,
        marginBottom: 20,
        borderColor: "grey",
        borderWidth: 3,
        borderRadius: 10,
        padding: 12,
        backgroundColor: "#420420",
        flex: 1
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
});

export default ResultsDetail

/*
    For setting the source of the image as a URL we have to pass an obj to source prop that has the URL as uri value!
    Image is like view we have to set some styles for it to show up! specially height and width!
*/