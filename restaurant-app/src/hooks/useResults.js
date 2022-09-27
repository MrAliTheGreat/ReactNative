import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
    const [searchResults, setSearchResults] = useState([])
    const [errorMessage, setErrorMessage] = useState("")

    const searchAPI = async (searchTerm) => {
        try{
            const response = await yelp.get("/search", {
                params: {
                    term: searchTerm,
                    limit: 50,
                    location: "Bloomington"
                }
            })
            setSearchResults(response.data.businesses)
        } catch(err){
            setErrorMessage("Something Went Wrong! :(")
        }
    }

    useEffect(() => {
        searchAPI("Pizza")
    }, [])
    
    return [searchAPI, searchResults, errorMessage]
}

/*
    For extracting a hook and putting it in a helper func we follow these actions:
    1. Cut every bit of code that is related to the specific functionality and paste it in the a new file
    2. return the values that are needed in the JSX or other parts
    3. make appropriate changes in the screen file 
*/