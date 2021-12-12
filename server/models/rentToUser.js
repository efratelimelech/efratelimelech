const mongoose = require('mongoose')

const rentToUserSchema = mongoose.Schema({

    pointId: { type: Object },
    startDate: { type: Date },
    endDate: { type: Date },
    userId: { type: Object },
    paymentNum: { type: Number },
    removeTime: { type: Object },
    messageFile: { type: Buffer },

    userId: { type: mongoose.Types.ObjectId, ref: 'rentToUser' }
})

module.exports = mongoose.model('rentToUser', rentToUserSchema)