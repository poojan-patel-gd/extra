const mongoose = require('mongoose');
const db = require('../config/db');

const bookschema = mongoose.Schema ({
    name : {
        type : String,
        default : 'User'
    },
    price : {
        type : Number,
        default : '100'
    },
    quantity : {
        type : Number,
        default : '1'
    },
    description : {
        type : String,
        default : 'None'
    },
    category : {
        type : String,
        default : 'Action and Adventure'
    }
});

const Books = mongoose.model('User',bookschema);
module.exports = Books;