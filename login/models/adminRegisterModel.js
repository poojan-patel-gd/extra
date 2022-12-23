const mongoose = require('mongoose');

const adminregisterSchema = mongoose.Schema({
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
    cpassword: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'admin'
    },
    phone: {
        type: Number,
        required: true
    }
});

const adminregister = mongoose.model('adminregister',adminregisterSchema);
module.exports = adminregister;