const express = require("express")
const router = express.Router()

const UserController = require('../controllers/UserController')

router.post("/adduser", UserController.addUser)
router.get("/allusers", UserController.getAllUser)
router.post('/deleteuser', UserController.deleteUser)
router.post('/updateuser', UserController.updateUser)

module.exports = router