require("./models/User")
const dotenv = require("dotenv")
dotenv.config("../.env")
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const authRoutes = require("./routes/authRoutes")
const requireAuth = require("./middlewares/requireAuth")

const app = express()
app.use(bodyParser.json())
app.use(authRoutes)

mongoose.connect(process.env.MONGO_URI)

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB instance!")
})

mongoose.connection.on("error", (err) => {
    console.log("Error connecting to MongoDB instance: " + err)
})


app.get("/", requireAuth , (req, res) => {
    res.send(`Email: ${req.user.email}, Password: ${req.user.password}`)
})

app.listen(3000, () => {
    console.log("Express: Listening on port 3000")
})

/*
    Whenever a request to "/" comes app will execute the callback function!
    This is also what happens for listen!

    When we want to run the server we will simply run "node src/index.js" in terminal

    For mongoURI we have to add our username and password to the connection string.

    Restarting the server each time when there is change is a bit dull!
    nodemon will watch our project directory and whenever a change happens in our project, it will automatically restart the server for us.
    By running the server using nodemon, instead of node, in the script section of package.json we can have the functionality mentioned above!
    This time we can use "npm run dev" in terminal instead of "node src/index.js"!

    JWT proves that the current user is the user with the mentioned email and password in login!
    For future requests the logged in user has to provide his/her JWT with the request!

    For post requests, the values will be in JSON format but express doesn't know how to handle JSON.
    So, for JSON handling we will use body-parser!
    By using "bodyParser.json()" in app, everything will first go through it which means all JSON values will be parsed
    then the request will go through authRoutes with JSON values parsed! It's like a pipeline!
    These parsed values can be found in req.body value of route handler!

    Middlewares for route handlers can be added as the second argument!
    This way after the execution of the middleware, if there is NOT any error the handler func will be executed!
    But if there is an error the error will be shown and the handler func will NOT execute!

    Since user was added to req in the requireAuth middleware, we can now access it in the handler func via req.user! 
*/