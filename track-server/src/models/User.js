const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

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

userSchema.pre("save", function(next){
    const user = this
    if(!user.isModified("password")){
        return next()
    }

    bcrypt.genSalt(10, (err, salt) => {
        if(err){
            return next(err)
        }

        bcrypt.hash(user.password, salt, (err, hash) => {
            if(err){
                return next(err)
            }
            user.password = hash
            next()
        })
    })
})

userSchema.methods.comparePasswords = function(inputPassword){
    const user = this
    return new Promise((resolve, reject) => {
        bcrypt.compare(inputPassword, user.password, (err, isMatch) => {
            if(err){
                return reject(err)
            }

            if(!isMatch){
                return reject(false)
            }

            return resolve(true)
        })
    })
}

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

    We have to use function(){} instead of () => {} because we are going to use this
    this by using function(){} will be the current user but this by using () => {} will be the context of the whole file
    I know it is a bit weird but whenever we want to use this as the current user we have to use function(){}!

    The first argument of genSalt is the difficulty of salt and the second one is the callback which is called when salt is generated!

    next(err) means that go to the next but also have the err with yourself so that the next func knows that the previous one failed!

    We will add a method to User to check the password when logging in!
    We have to return a promise since it would take some time to get the password from DB and check it --> async await
    Everything that uses await MUST return a promise remember! That is why we are using a promise here since we will use async await! 
*/