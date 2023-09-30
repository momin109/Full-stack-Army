const { model, Schema } = require('mongoose')
// **AdminAttendance:**

// - CreatedAt: DateTime
// - Status
// - TimeLimit

const adminAttendaneSchema = new Schema({
    timeLimit: Number,
    status: String,
    createAt: Date,
})

const AdminAttendance = ('AdminAttendance', adminAttendaneSchema)

module.exports = AdminAttendance;