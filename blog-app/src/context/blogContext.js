import React, {useState} from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
    const [blogPosts, setBlogPosts] = useState([])

    const addBlogPost = () => {
        setBlogPosts([...blogPosts, {"title": `Blog Post #${blogPosts.length + 1}`}])
    }

    return(
        <BlogContext.Provider value={{ data: blogPosts, addBlogPost: addBlogPost }}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContext;

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
*/