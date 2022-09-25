import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return(
        <View>
            <ImageDetail title="Forest" imageSource={require("../../assets/forest.jpg")} score={10}/>
            <ImageDetail title="Beach" imageSource={require("../../assets/beach.jpg")} score={7}/>
            <ImageDetail title="Mountain" imageSource={require("../../assets/mountain.jpg")} score={9}/>
        </View>
    );
}

const styles = StyleSheet.create({});

export default ImageScreen;

/*
    Reusable components are self-closing!

    The screen we use the reusable component is the parent and the component itself is the child
    Passing info from parent to child can be done by passing props! props the we create on our own!

    Since our reusable component is not named in StackNavigator it will NOT have the navigation obj
    So, the props will simply be an empty obj. We can add fields to props obj by putting our own key values (props)! Amazing!!!

    Whenever we want to assign a number to a prop we have to put the number in {}
*/