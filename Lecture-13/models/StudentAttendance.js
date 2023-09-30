const { model, Schema } = require('mongoose')

// **StudentAttendance:**

// - UserId
// - CreatedAt: DateTime
// - AdminAttendanceId

const studentAttendanceSchema = new Schema({
    create: Date,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    adminAttendance: {
        type: Schema.Types.ObjectId,
        ref: 'AdminAttendance',
    }

})

const StudentAttendance = ('StudentAttendance', studentAttendanceSchema)

module.exports = StudentAttendance;