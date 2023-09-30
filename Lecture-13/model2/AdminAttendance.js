const { model, Schema } = require('mongoose')

const adminAttendaneSchema = new Schema({
    createAd: Date,
    status: String,
    timeLimit: String,
})

const AdminAttendance = model('AdminAttendance', adminAttendaneSchema)

module.exports = AdminAttendance;