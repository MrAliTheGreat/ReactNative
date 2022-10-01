import React from "react";
import { View, StyleSheet } from "react-native";

import {FontAwesome} from "@expo/vector-icons"

const RatingStars = ({ numStars }) => {
    let starElements = []
    for(let i = 0; i < Math.floor(numStars); i++){
        starElements.push(
            <FontAwesome
                key={i} 
                name="star"
                color={"gold"}
                style={{fontSize: 30}}
            />
        )
    }
    if(numStars - Math.floor(numStars) !== 0){
        starElements.push(
            <FontAwesome
                key={Math.floor(numStars)} 
                name="star-half-full"
                color={"gold"}
                style={{fontSize: 30}}
            />
        )        
    }

    return(
        <View style={{flexDirection: "row", marginTop: 75}}>
            {starElements}
        </View>
    )
}

const styles = StyleSheet.create({});

export default RatingStars;