const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
require("dotenv").config("../../.env")

const User = mongoose.model("User")

module.exports = (req, res, next) => {
    const { authorization } = req.headers

    if(!authorization){
        return res.status(401).send({
            error: "You must be logged in!"
        })
    }

    const token = authorization.replace("bearer ", "")
    jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
        if(err){
            return res.status(401).send({
                error: "You must be logged in!"
            })
        }

        const { userID } = payload
        const user = await User.findById(userID)
        req.user = user
        next()
    })
}


/*
    Middleware funcs are funcs that take an incoming request and do some kind of preprocessing on it!

    Whenever a request comes into express, it will automatically lower case every header name!

    next func is like saying go to the next middleware in the pipeline!
    If no other middleware is defined then the request handler will kick in!

    For authorization we have to pass "bearer JWT_TOKEN" in the header section of the request under the header name authorization!

    401 is for access denied!

    After the verification via JWT the following func will get executed!
    If failed err will have value, if successed payload will be the record that we saved in the DB!

    Others will have access to req so when the user is found we can add it to req and call next
    This way other parts of the server can have access to user via req!
    After everything is done in the current middleware, next() is called to move on!
*/