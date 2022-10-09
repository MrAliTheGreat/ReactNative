const express = require("express")

const router = express.Router()

router.post("/signup", (req, res) => {
    console.log(req.body.email)
    res.send("You have made a post request!")
})

module.exports = router

/*
    router is an obj that allows us to associate some number of route handlers with it.
    We can associate the final route onj with the app in index.js!
    router is like a group maker! It makes it easy to group a number of route handlers
    and finally put it all together with app in index.js!

    "module.exports = router" will export router so that we can use it in other files

    We have to set Content-Type to application/json in header of post request so that the API understands that it got a JSON!
*/