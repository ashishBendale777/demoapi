const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    UserName: String,
    UserEmail: String,
    UserMobile: String,
    UserGender: String
}, {
    timestamps: true
})

module.exports = mongoose.model('User', UserSchema)

