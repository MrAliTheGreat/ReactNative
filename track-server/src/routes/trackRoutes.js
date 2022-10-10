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

module.exports = router


/*
    When use is called with a middleware each route will execute the middleware before proceeding to route handler!
*/