const { Schema, model } = require('mongoose');


// schemas

const User = new Schema({
    name: String,
    lastName: String,
    email: String,
    password: String
})




//export models

module.exports.User = model('User', User)