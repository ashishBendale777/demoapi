const express = require('express')
const mongoose = require("mongoose")
const bodyparser = require("body-parser")


//create server
const server = express()

server.use(bodyparser.json())
server.use(bodyparser.urlencoded({ extended: false }))

//database connectivity
mongoose.connect("mongodb://127.0.0.1:27017/demo-db", {
    useNewUrlParser: true
}).then((result) => {
    console.log("DB Connected")
}).catch((err) => {
    console.log("DB Not Connected")
});


server.get('/', (req, res) => {
    res.send("Hello")
})

server.get('/user', (req, res) => {
    res.send("Hello Users")
})

const routes = require('./src/routes/Routes')
server.use("/api/", routes)

server.listen(5000, () => {
    console.log("Server Started")
})