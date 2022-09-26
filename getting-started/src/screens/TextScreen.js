import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
    const [name, setName] = useState("")
    return(
        <View>
            <Text style={styles.text}>Enter Name</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => {
                    setName(newValue)
                }}
            />
            {
                (name.length <= 5)
                ? <Text style={{color: "red", marginLeft: 15}}>Name must be more than 5 characters!</Text>
                : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: "black",
        borderWidth: 1
    },
    text:{
        fontSize: 25,
        fontWeight: "bold",
        marginLeft: 15,
        marginTop: 10
    }
});

export default TextScreen;

/*
    TextInput is self-closing!
    TextInput at first has no styling! So, you can't pretty much see it!

    IOS will on default make the first char captalized and also it will use autocorrect!
    So, definitely we want to remove these actions!
    Removing captalization action with prop --> autoCapitalize="none"
    This prop can get other values that shows what part of sentence we should captalize --> sentence, word, char, none
    Removing autocorrect --> autoCorrect={false}

    In react we NEVER directly inspect child's state from parent!
    Instead, if we want to communicate data from child up to a parent, we have to use a callback system
    where we pass a prop down that is a callback func and when something happens inside the child,
    it will call that callback and tell the parent that something just occured!

    This whole thing with value prop is weird!!! But we are doing what we have to do to not let the parent inspect the child!
    Like if we type, it's not going to show in TextInput anymore. That means the parent is not inspecting the child directly!
    The screen is the parent and TextInput is the child! Like when we type it shows in TextInput but ALSO in the whole screen
    So, the parent is doing what is should NOT do! Inspect child directly!

    if else statements do not work in JSX! Only ? : works for conditional!
*/