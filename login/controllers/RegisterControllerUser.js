const Register = require('../models/RegisterModel');
const jwtData = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');

module.exports.register = async (req, res) => {
    try {

        let user = await Register.findOne({ email: req.body.email });
        console.log(user);
        if (user) {
            return res.json({ "status": "0", "msg": "User already exists" });
        }
        else {

            // const password = req.body.password;
            // const cpassword = req.body.cpassword;

            // if (password === cpassword) {
                const register = await Register.create({
                    name: req.body.name,
                    email: req.body.email,
                    password: bcryptjs.hashSync(req.body.password, 10),
                    // cpassword: req.body.cpassword,
                    // city: req.body.city,
                    // phone: req.body.phone,
                });
                console.log(register);
                if (register) {
                    return res.json({ "status": "1", "msg": "User successfully register" });
                } else {
                    return res.json({ "status": "0", "msg": "User unsuccessfully register" });
                }
            }
            // else {
            //     return res.json({ "status": "0", "msg": "Conform Password is Not Match" });
            // }
        }
    
    catch (err) {
        return res.json({ "status": "0", "msg": err });
    }
}

module.exports.login = async (req, res) => {
    const login = await Register.findOne({ email: req.body.email });
    if (login) {
        if (login.password == req.body.password) {
            let token = jwtData.sign(login.toJSON(), 'rnw', { expiresIn: 10000 });
            return res.json({ "status": "1", "token": token });
        } else {
            return res.json({ "status": "0", "msg": "Password is wrong" });
        }
    } else {
        return res.json({ "status": "0", "msg": "Email not found" });
    }
}

module.exports.fatchuser = async (req,res) => {
    Register.find((err, val) =>{
        if(err)
        {
            return res.json({ "status": "0", "msg": "User Data not found" });
        }
        else
        {
            return res.json({ "status": "1", "user data": val });
        }
    }); 
}

module.exports.deleteuser = async (req, res) => {
    const userid = req.body.id;
    
    if(userid)
    {
        let datadelete = await Register.findByIdAndDelete(userid);
        if(datadelete)
        {
            return res.json({ "status": "1", "msg": "User Data Deleted Successfully" });
        }else{
            return res.json({ "status": "0", "msg": "User Data Deleted Unsuccessfully" });
        }
        
    }
    else
    {
        return res.json({ "status": "0", "msg": "Id not found" });
    }
}