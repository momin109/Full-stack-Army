const { model, Schema } = require('mongoose')
//mongoose দিয়ে মডেল তৈরি করার জন্য আমাদের প্রথম দরকার হয় একটা Schema. Schema হচ্ছে একটা শেইপ, একটা চেহারা। যেমন User মডেলে যা যা থাকবে সেটাই তার শেইপ, এর বাইরে কিছু থাকতে পারবে না। প্রথমে আমরা আমাদের mongoose import করে নিয়ে আসি। আমার সব দরকার নেই। আমার দরকার শুধু model আর Schema.
// const userSchema = new mongoose.Shema //ai line niche line same

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    roles: [String],
    accuntStatus: String,

})

const User = model('User', userSchema)

module.exports = User;