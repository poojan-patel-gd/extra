const mongoose = require('mongoose');

const registerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // cpassword: {
    //     type: String,
    //     required: true
    // },
    // role: {
    //     type: String,
    //     default: 'user'
    // },
    // city: {
    //     type: String,
    //     required: true
    // },
    // phone: {
    //     type: Number,
    //     required: true
    // }
});

const register = mongoose.model('register', registerSchema);
module.exports = register;