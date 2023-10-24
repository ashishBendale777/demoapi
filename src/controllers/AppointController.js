const Appoint = require('../models/AppointmentSchema')

exports.addAppointment = (req, res) => {
    const app = new Appoint({
        UserId: req.body.userid,
        ServiceFor: req.body.servicefor,
        AppointStatus: req.body.status
    })

    app.save()
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).send(err)
        });
}
