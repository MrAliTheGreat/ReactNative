import React from "react";
import {View, Text, StyleSheet, Button} from "react-native"

const ColorCounter = ({ colorName, onIncrease, onDecrease }) => {
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{colorName}</Text>
            <Button 
                title={`Increase ${colorName}`}
                onPress={() => {
                    onIncrease()
                }}
            />
            <Button
                title={`Decrease ${colorName}`}
                onPress={() => {
                    onDecrease()
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 25
    },
    viewStyle:{
        justifyContent: "center",
        alignItems: "center"
    }
});

export default ColorCounter;