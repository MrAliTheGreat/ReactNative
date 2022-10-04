import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
    if(action.type === "delete_blogpost"){
        return state.filter((blogPost) => {
            return blogPost.id !== action.payload
        })
    }
    if(action.type === "edit_blogpost"){
        return state.map((blogPost) => {
            return blogPost.id === action.payload.id
            ? action.payload
            : blogPost
        })
    }
    if(action.type === "get_blogposts"){
        return action.payload
    }
    return state
}


const addBlogPost = (dispatch) => {
    return async (title, content, navCallback) => {
        await jsonServer.post("/blogposts", {title, content})
        if(navCallback){
            navCallback()
        }
    }
}

const deleteBlogPost = (dispatch) => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`)
        // We can also call the API again here and that makes sense
        // But here dispatch is called
        // Also id of the blogpost we want to delete, has to be passed to route. It can be seen above
        // Removing the blogpost on the server will happen automatically! Like the notes I wrote about post!
        dispatch({type: "delete_blogpost", payload: id})
    }
}

const editBlogPost = (dispatch) => {
    // Whenever we want to update a recoed, PUT request is used!
    // id is used like in DELETE request, but also we pass the new blogpost like in POST request. Cool!
    return async (id, title, content, navCallback) => {
        await jsonServer.put(`/blogposts/${id}`, {title, content})
        // dispatch is used here but again we can just make a GET request on blogposts!
        dispatch({type: "edit_blogpost", payload: {id, title, content}})
        if(navCallback){
            navCallback()
        }
    }
}

const getBlogPosts = (dispatch) => {
    return async () => {
        const res = await jsonServer.get("/blogposts")
        dispatch({type: "get_blogposts", payload: res.data})
    }
}

export const {Context, Provider} = createDataContext(
    blogReducer,
    {
        addBlogPost,
        deleteBlogPost,
        editBlogPost,
        getBlogPosts
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

    map will create a new array and put the elements mentioned in the callback in each slot!

    When we call post, the new element will be automatically added to the records!
    Like here when post is called with a new blogpost obj the list in db will change and the blogpost will be addded to the list!
*/