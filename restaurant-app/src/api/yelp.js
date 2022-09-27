import axios from "axios"
import {_, API_KEY} from "@env"

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer " + API_KEY
    }
});

/*
    For each API that we are going to use we must have a seperate js file
    baseURL is the root URL that we are going to interact with
    No slash needed at the end of baseURL!

    For authentication we are going to add our API key in a header
    The field is Authorization and the value is "Bearer API_KEY"
*/