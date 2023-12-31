const User = require('../models/UserSchema')

exports.addUser = (req, res) => {
    const user = new User({
        UserName: req.body.UserName,
        UserEmail: req.body.UserEmail,
        UserMobile: req.body.UserMobile,
        UserGender: req.body.UserGender,
    })

    user.save()
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).send(err)
        });
}

exports.getAllUser = (req, res) => [
    User.find()
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).send(err)
        })
]

exports.deleteUser = (req, res) => {
    User.deleteOne({ _id: req.body.uid })
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).send(err)
        });
};


exports.updateUser = (req, res) => {
    User.findByIdAndUpdate({ _id: req.body.uid },
        {
            UserMobile: req.body.UserMobile,
        },
        {
            new: true
        }).then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).send(err)
        });
}
