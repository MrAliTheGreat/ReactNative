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

    Providing unique and required in the fields will help our handlings since mongoose will do it automatically!
    When we try to add a duplicate user (uniqure) or add an empty user (required) mongoose will say bro this is wrong do it right!
    So, it will return an error and we can simply just by error handling get what we want!
    We don't need to like query for a user and if it is in the DB then we print a failed message, this will be done by mongoose!
    We just get the error and print the message! This whole process will happen by mongoose when we try to .save() a user!
*/