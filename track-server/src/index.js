const dotenv = require("dotenv")
dotenv.config("../.env")
const express = require("express")
const mongoose = require("mongoose")

const app = express()

mongoose.connect(process.env.MONGO_URI)

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB instance!")
})

mongoose.connection.on("error", (err) => {
    console.log("Error connecting to MongoDB instance: " + err)
})


app.get("/", (req, res) => {
    res.send("Well Hello There!")
})

app.listen(3000, () => {
    console.log("Express: Listening on port 3000")
})

/*
    Whenever a request to "/" comes app will execute the callback function!
    This is also what happens for listen!

    When we want to run the server we will simply run "node src/index.js" in terminal

    For mongoURI we have to add our username and password to the connection string.
*/