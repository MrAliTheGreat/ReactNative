import React from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
    return(
        <BlogContext.Provider value={"Well, Hello There!"}>
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

    IMPORTANT!!!
    Apparantly context var and anything related to it must be captalized or else errors will occur! Really Weird!
*/