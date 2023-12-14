const express = require('express')
const mongoose = require("mongoose")
const bodyparser = require("body-parser")
const cors = require('cors')
const multer = require('multer')
const path = require('path')

//create server
const server = express()

server.use(cors())
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


//storing image
const fileStorageConfig = multer.diskStorage({
    destination: "Uploads",
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

//upload config
const fileUploadConfig = multer({
    storage: fileStorageConfig,
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg|pdf)$/)) {
            return cb(new Error("Please Upload Correct File"))
        }
        cb(undefined, true)
    }
})

//upload image route
server.post("/uploadfile",
    fileUploadConfig.single('image'), (req, res) => {
        res.status(200)
            .json({
                filepath: "/images/".concat(req.file.filename)
                , uploaded: true
            })
    },
    (err, req, res, next) => {
        res.status(400).send({ error: err.message })
    }
)


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