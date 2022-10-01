import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Dimensions, Image } from "react-native";

import yelp from "../api/yelp"
import RatingStars from "../component/RatingStars";

const resultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null)

    const getResult = async (id) => {
        const res = await yelp.get(`/${id}`)
        setResult(res.data)
    }

    useEffect(() => {
        getResult(navigation.getParam("id"))
    }, [])

    if(!result){
        return null
    }

    return(
        result.photos.length
        ?
        <View style={{backgroundColor: "#420420", flex: 1}}>
            <View>
                <FlatList
                    keyExtractor={(photo) => photo}
                    data={result.photos}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return(
                            <Image style={styles.image} source={ {uri: item} } />
                        )
                    }}
                />
            </View>
            <View style={{alignItems: "center"}}>
                <Text style={styles.title}>{result.name}</Text>
                <Text style={styles.details}>{result.location.display_address.join(" ")}</Text>
                <Text style={styles.details}>{result.display_phone}</Text>
                <RatingStars numStars={result.rating}/>
                <Text style={styles.review}>{result.review_count} reviews</Text>
                
            </View>
        </View>        
        :          
        <View style={{flex: 1, justifyContent: "center"}}>
            <ActivityIndicator size={"large"} color={"#420420"} />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 250,
        marginHorizontal: 5,
        marginVertical: 10,
        width: Dimensions.get("window").width - 2 * 10 - 50,
        borderRadius: 10,
        borderColor: "white",
        borderWidth: 2
    },
    title:{
        fontSize: 40,
        fontWeight: "bold",
        marginBottom: 10,
        color: "white",
        textAlign: "center"
    },
    details:{
        fontSize: 18,
        color: "white",
        marginTop: 5,        
    },
    review:{
        fontSize: 15,
        color: "lightgrey",
        marginTop: 5,        
    }
});

export default resultsShowScreen

/*
    So we now know 2 different ways to access navigation prop other than being mentioned on App.js navigator
    1. Use withNavigation in export default
    2. Have an obj as second input of navigate function
    In the second one the new screen will have navigation as a prop
    By using getParam in navigation obj we can get the passed values using navigate func
    The passed value will NOT be a prop since this communication is not between a parent and a child!
*/