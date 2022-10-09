const express = require("express")
const mongoose = require("mongoose")

const User = mongoose.model("User")

const router = express.Router()

router.post("/signup", async (req, res) => {
    const {email, password} = req.body

    try{
        const user = new User({
            email,
            password
        })
        await user.save()

        res.send("You have made a post request!")
    }catch(err){
        return res.status(422).send(err.message)
    }
})

module.exports = router

/*
    router is an obj that allows us to associate some number of route handlers with it.
    We can associate the final route onj with the app in index.js!
    router is like a group maker! It makes it easy to group a number of route handlers
    and finally put it all together with app in index.js!

    "module.exports = router" will export router so that we can use it in other files

    We have to set Content-Type to application/json in header of post request so that the API understands that it got a JSON!

    By using the User obj we can query or manipulate the data in our collection on the DB!

    user.save will add the new user to DB. It is an async command!
    By default a new db will be created by the name of test and our record will be added to a collection named users!

    422 status code is for sending invalid data!
*/