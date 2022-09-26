import React, {useReducer} from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
    return (action.type === "change_count") ? {count: state.count + action.payload} : state
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0}) 
    return(
        <View>
            <Button 
                title="Increase"
                onPress={() => {
                    dispatch({type: "change_count", payload: 1})
                }}
            />
            <Button
                title="Decrease"
                onPress={() => {
                    dispatch({type: "change_count", payload: -1})
                }}
            />
            <Text>Current Count: {state.count}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default CounterScreen;

/*
    Prop is a system that is used to pass data from parent to child
    State is a system that is used to track a piece of data that will change over time
    If that data changes, our app will rerender

    A normal var will not be tracked by react for change. For tracking we will use state
    useState is a hook! a hook is a func that adds some new functionality to our main func
    By using useState we can make a special var that react watches for change
    When change happens react will update component on screen

    We pass the starting value of our var to useState
    useState will return an array. [var, setVar] will give us the first two elements of that array
    The first one is the state variable (var) and it will be the starting value that we passed to useState at first
    The second one (setVar) will be used to change our state variable (var)
    var will be changed over time! Everytime we want to change var we can NOT change it directly!
    So for example no var++ instead setVar(var + 1)!
    setVar is a func and when we want to change var we will call it with the new value for var
    Any time we call setVar react will automatically rerun our ENTIRE main func! But var value will be updated

    React knows if a component has already been rendered and if it has been rendered useState will not initialize the var again!
    The Update of our var with setVar will happen with a brief pause!
    So, if you use console.log immediately after useState, var can still be the previous value

    If we use reusable components ans have a state var in them, each of the components will have their own unique state var! Cool!!!
*/