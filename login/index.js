 const express = require('express')
const app = express()
const port = 9000

app.use(express.urlencoded());

const db = require('./config/mongoose');


app.use('/',require('./routes'));

app.listen(port,(err)=>{
    if(err){
        console.log("Something wrong");
        return false;
    }
});