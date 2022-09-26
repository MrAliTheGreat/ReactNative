import React, { useReducer } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import ColorCounter from "../components/ColorCounter";

const reducer = (state, action) => {
    if(action.type === "change_red"){
        return (state.red + action.payload > 255 || state.red + action.payload < 0)
        ? state
        : {...state, red: state.red + action.payload} 
    }
    if(action.type === "change_green"){
        return (state.green + action.payload > 255 || state.green + action.payload < 0)
        ? state
        : {...state, green: state.green + action.payload}
    }
    if(action.type === "change_blue"){
        return (state.blue + action.payload > 255 || state.blue + action.payload < 0)
        ? state
        : {...state, blue: state.blue + action.payload} 
    }
    return state    
}

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})

    return(
        <View>
            <ColorCounter 
                colorName="Red"
                onIncrease={() => {
                    dispatch({type: "change_red", payload: 15})
                }}
                onDecrease={() => {
                    dispatch({type: "change_red", payload: -15})
                }}
            />
            <ColorCounter 
                colorName="Green"
                onIncrease={() => {
                    dispatch({type: "change_green", payload: 15})
                }}
                onDecrease={() => {
                    dispatch({type: "change_green", payload: -15})
                }}
            />
            <ColorCounter 
                colorName="Blue"
                onIncrease={() => {
                    dispatch({type: "change_blue", payload: 15})
                }}
                onDecrease={() => {
                    dispatch({type: "change_blue", payload: -15})
                }}
            />
            <View 
                style={{
                    height: 150,
                    width: Dimensions.get("window").width,
                    backgroundColor:`rgb(${state.red}, ${state.green}, ${state.blue})` 
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

    It is better to declare reducer function outside of the main func!
    action var in reducer function is the way we want to change the state vars
    Like we can say in the action obj to change a specific state var by some specific amount
    reducer function has to always return a value that can be used as state vars!
    So, basically, reducer is like setVar in useState! Well dispatch is to be exact!!!
    dispatch is basically runMyReducer! Whenever we want to change our state vars we must use dispatch and ONLY pass action!

    {...state, red: state.red + action.amount} means get a copy of all elements of state and put it in a new obj
    Then change the value of red to state.red + action.amount
    
    The names that developers use are as follows:
    For action, the state var we want to change is the following key value --> type: "change_stateVarName"
                the amount we want to change is the following key value    --> payload: amountOfChange
*/