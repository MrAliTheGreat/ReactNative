const express = require("express")
const mongoose = require("mongoose")
const Track = mongoose.model("Track")
const requireAuth = require("../middlewares/requireAuth")

const router = express.Router()

router.use(requireAuth)

router.get("/tracks", async (req, res) => {
    const tracks = await Track.find({ userID: req.user._id })
    res.send(tracks)
})

router.post("/tracks", async (req, res) => {
    const { name, locations } = req.body
    if(!name || !locations){
        return res.status(422).send({ error: "You must provide name and locations!" })
    }

    try{
        const track = new Track({userID: req.user._id, name, locations})
        await track.save()
        res.send(track)
    } catch(err) {
        res.status(422).send({ error: err.message })
    }
})

module.exports = router


/*
    When use is called with a middleware each route will execute the middleware before proceeding to route handler!

    When provided data type is wrong then mongoose wil return an error that's why we track.save() in a try catch statement. 
*/