const mongoose = require('mongoose');

const countrySchema = mongoose.Schema({
    country: {
        type: String,
        required: true
    }
});

const country = mongoose.model('country',countrySchema);
module.exports = country;