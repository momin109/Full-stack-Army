const { model, Schema } = require('mongoose')

const studenAttendaneSchema = new Schema({
    createAd: Date,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    adminAttendane: {
        type: Schema.Types.ObjectId,
        ref: 'AdminAttendance'
    }
})

const StudenAttendance = model('StudenAttendance', studenAttendaneSchema)

module.exports = StudenAttendance;