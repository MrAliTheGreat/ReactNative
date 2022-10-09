const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

mongoose.model("User", userSchema)

/*
    Model is like a link between what we have in our code and the collection of data on the DB!
    We have to first tell the DB what our link is and we have to explain what our record is like.
    This explanation is Schema!
    At the end we tell the DB about our link via "mongoose.model("User", userSchema)"
    So, now DB knows what our way of connection to a certain collection is.

    We have to declare the model only one time our whole project. So, we can require the model in index.js
    For referencing the model in other files we can directly access DB and get our model!

    By creating the model, mongoose will automatically create the collection in the DB!
*/