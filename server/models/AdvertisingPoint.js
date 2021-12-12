const mongoose = require('mongoose')

const AdvertisingPointSchema = mongoose.Schema ({
    address: { type: String, require: true },
    areaId: { type: Object, require: true },
    size: { type: Number, require: true },
    basicPriceWeek: { type: Number, require: true },
    status: { type: Boolean, require: true },

})

module.exports = mongoose.model('AdvertisingPoint', AdvertisingPointSchema)
