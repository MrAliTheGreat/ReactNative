import React, {useReducer} from "react";
import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
    if(action.type === "add_blogpost"){
        return [...state, {
            id: Math.floor(Math.random() * 10000),
            title: `Blog Post #${state.length + 1}`
        }]
    }
    if(action.type === "delete_blogpost"){
        return state.filter((blogPost) => {
            return blogPost.id !== action.payload
        })
    }
    return state
}

const addBlogPost = (dispatch) => {
    return () => {
        dispatch({type: "add_blogpost"})
    }
}

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({type: "delete_blogpost", payload: id})
    }
}

export const {Context, Provider} = createDataContext(
    blogReducer,
    {
        addBlogPost,
        deleteBlogPost
    },
    []
);

/*
    Context is like a pipe! It's responsible for direct communication of provider with nested childs!
    
    An element when wrapped with for example <customComponent> </customComponent> tag will be passed as a prop to customComponent!!! Weird I know!!!
    The prop is named children!

    We can have many exports in one file but only one can be default! That is the one the file will be known with!
    When just export is used when importing we have to use {}!

    value prop in Context is the data that we are passing down!

    IMPORTANT!!!
    Apparantly context var and anything related to it must be captalized or else errors will occur! Really Weird!

    If the provider has a state var and this state var updates the WHOLE app will rerender since everything is wrapped in provider!

    We can have multiple resources in our app! Each time creating a new context is repetitive
    So, we can just declare the reducer and helper action funcs and state initial value and use a reusable context component to make everything work without any duplication!

    dispatch is declared in createDataContext so for accessing dispatch we are using callbacks! That is the reason for returning a func in addBlogPost!
*/