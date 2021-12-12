const User = require('../models/user')

const createUAdvertisingPoint = async (req, res) => {
    console.log("create AdvertisingPoint")
    const AdvertisingPoint = new AdvertisingPoint(req.body)
    try {
        const newAdvertisingPoint = await AdvertisingPoint.save()
        res.status(200).json({ message: "new AdvertisingPoint created succesfully", newAdvertisingPoint: newAdvertisingPoint })
    }
    catch (err) {
        res.status(500).send(err.message)
    }
}

const getAdvertisingPoint = async (req, res) => {
    console.log("get AdvertisingPoint")
    try {
        const AdvertisingPoint = AdvertisingPoint.findById(req.params.id)
        if (AdvertisingPoint)
            res.status(200).json({ AdvertisingPoint: AdvertisingPoint })
        else
            res.status(404).send("AdvertisingPoint not exist")
    }
    catch (err) {
        res.status(500).send(err.message)
    }
}


const updateAdvertisingPoint = (req, res) => {
    console.log("update AdvertisingPoint")
    User.findByIdAndUpdate(req.body._id, req.body, { new: true })
        .then(AdvertisingPoint => {
            res.status(200).json({ AdvertisingPoint: AdvertisingPoint })
        }).catch(err =>
            res.status(500).send(err.message))
}

const deleteAdvertisingPoint = (req, res) => {
    console.log("delete AdvertisingPoint")
    AdvertisingPoint.findByIdAndDelete(req.params.id)
        .then(AdvertisingPoint => {
            res.status(200).json({ message: "AdvertisingPoint deleted succesfully", user: user })
        }).catch(err =>
            res.status(500).send(err.message))
}


module.exports  = { createUAdvertisingPoint, getAdvertisingPoint, updateAdvertisingPoint, deleteAdvertisingPoint }