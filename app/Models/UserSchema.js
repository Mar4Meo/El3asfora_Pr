const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    Full_Name : {
        type: String,
        required : true
    },
    Age : {
        type: Number,
        required : true
    },
    Email : {
        type: String,
        required : true
    }
})

const User = mongoose.model('User', UserSchema);

module.exports = User;