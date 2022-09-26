import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
    return(
        <View>
            <View style={styles.mainView}>
                <View style={{...styles.childView, backgroundColor: "red"}}/>
                <View style={{...styles.childView, backgroundColor: "blue"}}/>
            </View>            
            <View style={{...styles.childView, backgroundColor: "green", alignSelf: "center"}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView:{
        flexDirection: "row",
        justifyContent: "space-between",
    },
    childView:{
        height: 100,
        width: 100
    }
});

export default BoxScreen;

/*
    Different layout systems:
    Box Object Model --> Used to affect positioning of a single element
    Flex Box         --> Used to position multiple elements with a common parent
    Position         --> Used to override Box Object Model or Flex Box.
    .                    Used to show how a single element gets laid out inside of a parent

    1. Box Object Model:
    We have 3 spaces around a element (content) by order from closest to farthest --> padding border margin

    2. Flex Box:
    alignItems: "stretch"           --> Defined in PARENT and each child will cover the whole screen horizontally! (Default)
    alignItems: "flex-start"        --> Defined in PARENT and each child will be on the left and only covers a part of screen that shows its content
    alignItems: "flex-end"          --> Exactly like flex-start but on the right
    alignItems: "center"            --> Like before but center
    
    flexDirection: "column"         --> Defined in PARENT and each child will be placed vertically (Default)
    flexDirection: "row"            --> Defined in PARENT and each child will be placed horizontally. each child will only occupy enough space to show its content

    justifyContent: "space-between" --> Defined in PARENT and each child will be placed with equal space between them
    justifyContent: "space-around"  --> Like space-between but also some space before first child and after last child
    justifyContent: "flex-start" "center" "flex-end" like before

    flexDirection and alignItem directions are OPPOSITE of each other!
    flexDirection and justifyContent directions are the SAME!

    flex: 1                         --> Defined in CHILD and it will change how much space the child takes up in the parent elemen
    .                                   flex value of 1 will make the child take up as much available space in the parent as it can in the direction of flexDirection
    .                                   If flex 1 is used on multiple children each will take up as much space as they can but they will share the space equally!
    .                                   flex can get a value other than 1. It then will be proportional. Like if a child has flex 6 and another on 4 then total is 10,
    .                                   first child will occupy 6/10 of the screen and the other child will occupy 4/10 of screen

    alignSelf: "center"             --> Defined in CHILD and it will override alignItem of parent for the child!
    .                               --> Like the parent will be "stretch" but this child will be aligned center! Cool!!!

    3. Position:
    position: "relative"            --> Defined in CHILD and it will be as usual (Default)
    position: "absolute"            --> Defined in CHILD and it will make react ignore this child when rendering. This child will become seperate from its siblings!
    .                                   SOME flexbox rules placed by the parent will yet be obeyed by this child!
    .                                   Like "stretch" will be ignored by the child! This child will occupy the space required for just showing its content

    top: number                     --> Defined in CHILD and it will be like margin but the relation between this child and its siblings is ignored. So, this child can cover a sibling!
    Same for bottom, right and left. Even if position is "relative" this covering can happen!
    By setting position to "absolute" and values of top, bottom, right and left to 0, the child will cover up the whole parent space!
    Shortcut --> ...StyleSheet.absoluteFillObject (Copy all of StyleSheet.absoluteFillObject elements and put in this style of mine)


    The Order we have to go: Box Object Model rules --> position --> flexbox
*/