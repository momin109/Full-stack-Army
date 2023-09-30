const { model, Schema } = require('mongoose')

const profileSchema = new Schema({
    fitsName: String,
    lastName: String,
    phone: String,
    aveter: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }

})
const Profile = ('Profile', profileSchema)

module.exports = Profile;