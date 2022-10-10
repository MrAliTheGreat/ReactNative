const mongoose = require("mongoose")

const pointSchema = new mongoose.Schema({
    timestamp: Number,
    coords: {
        latitude: Number,
        longitude: Number,
        altitude: Number,
        accuracy: Number,
        heading: Number,
        speed: Number
    }
})

const trackSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    name: {
        type: String,
        default: ""
    },
    locations: [pointSchema]
})

mongoose.model("Track", trackSchema)

/*
    ref will be the reference to another schema in the DB
    Like the mongoose will know that userID in track schema is linked to User

    default is for setting the default value of field and is used when nothing is provided!

    Since point schema doesn't have a meaning without track schema we do NOT define it in another file
    point is pointless without track and there is no separate use for it in our case

    Whenever we create a new schema a _id will be assigned to that obj!
*/