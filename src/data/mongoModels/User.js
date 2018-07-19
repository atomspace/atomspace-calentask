const mongoose = require('mongoose');

const UserSchema = mongoose.Schema ({
    username: String,
    name: String,
    password: String
})

const User = module.exports = mongoose.model('User', UserSchema);