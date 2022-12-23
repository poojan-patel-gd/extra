const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/milansirmvc");
const db = mongoose.connection;
db.on('err', console.error.bind(console, "DB not start"));
db.once('open', (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log("DB is connected");
});

module.exports = db;