const express = require("express")

const app = express()

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
*/