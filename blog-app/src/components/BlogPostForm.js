import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const BlogPostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title)
    const [content, setContent] = useState(initialValues.content)

    return(
        <View>
            <Text style={styles.text}> Title </Text>
            <TextInput style={styles.input} value={title} onChangeText={setTitle}/>
            <Text style={styles.text}> Content </Text>
            <TextInput style={styles.input} value={content} onChangeText={setContent}/>
            <Button title="Save Blog Post" onPress={() => {onSubmit(title, content)}}/>
        </View>         
    )
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: "",
        content: ""
    }
}

const styles = StyleSheet.create({
    text: {
        margin: 5,
        fontSize: 25,
        fontWeight: "bold"
    },
    input: {
        fontSize: 15,
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 5,
        padding: 10,
        marginHorizontal: 10,
        marginBottom: 30
    },    
});

export default BlogPostForm

/*
    If we do not have a value for prop we can set a default value for it
    This way future errors mentioning undefined for props with no value won't occur!
    Default prop values can be set by using .defaultProps
    If our component has the prop the value of the prop will be considered
    But if the prop is not mentioned then the default value will be used!
*/