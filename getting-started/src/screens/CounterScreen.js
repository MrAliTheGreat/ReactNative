import React, {useState} from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
    const [count, setCount] = useState(0);
    return(
        <View>
            <Button 
                title="Increase"
                onPress={() => {
                    setCount(count + 1)
                }}
            />
            <Button
                title="Decrease"
                onPress={() => {
                    setCount(count - 1)
                }}
            />
            <Text>Current Count: {count}</Text>
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
    Any time we call setVar react will automatically rerun our entire main func! But var value will be updated
*/