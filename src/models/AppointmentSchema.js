const mongoose = require('mongoose')

const AppointmentSchema = mongoose.Schema({
    AppDate: { type: Date, default: new Date() },
    UserId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    ServiceFor: String ,
    AppointStatus: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Appointment', AppointmentSchema)

