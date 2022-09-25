import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = (props) => {
    return(
        <View>
            <Image source={props.imageSource}/>
            <Text>{props.title}</Text>
            <Text>Score: {props.score}</Text>
        </View>        
    );
}

const styles = StyleSheet.create({});

export default ImageDetail;

/*
    Image is self-closing!

    require is used to select a locally saved file!
    require will convert image to some identifier. So, when logged the value can be somewhat weird!
*/