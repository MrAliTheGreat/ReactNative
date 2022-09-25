import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    const setColor = (color, change) =>{
        if(color === "red"){
            red + change > 255 || red + change < 0 ? null : setRed(red + change)
            return
        }
        if(color === "green"){
            green + change > 255 || green + change < 0 ? null : setGreen(green + change)
            return
        }
        if(color === "blue"){
            blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
        }
        return
    }

    return(
        <View>
            <ColorCounter 
                colorName="Red"
                onIncrease={() => {
                    setColor("red", 15)
                }}
                onDecrease={() => {
                    setColor("red", -15)
                }}
            />
            <ColorCounter 
                colorName="Green"
                onIncrease={() => {
                    setColor("green", 15)
                }}
                onDecrease={() => {
                    setColor("green", -15)
                }}
            />
            <ColorCounter 
                colorName="Blue"
                onIncrease={() => {
                    setColor("blue", 15)
                }}
                onDecrease={() => {
                    setColor("blue", -15)
                }}
            />
            <View 
                style={{
                    height: 150,
                    width: Dimensions.get("window").width,
                    backgroundColor:`rgb(${red}, ${green}, ${blue})` 
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({});

export default SquareScreen;

/*
    Generally, we create vars in the most parent component that needs to read OR change a state value!
    If a child needs to read a state value, the parent can pass it down as a prop!
    If a child needs to change a state value, the parent can pass down a callback function to change state value as a prop!
    
    Any function that is passed as an argument to another function so that it can be executed in that other function is called as a callback function.
    
    For managing state we can either use Reducer or useState
    For using Reducer we must have multiple closely-related state vars and also know exactly how they will change

*/