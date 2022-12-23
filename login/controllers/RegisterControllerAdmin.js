const adminregister = require('../models/adminRegisterModel');
const jwtData = require('jsonwebtoken');
// const bcryptjs = require('bcryptjs');

module.exports.adminregister = async (req, res) => {
    try {

        let user = await adminregister.findOne({ email: req.body.email });
        if (user) {
            return res.json({ "status": "0", "msg": "User already exists" });
        }
        else {

            // const passwordhash = await bcrypt.hash(req.body.password, 10);
            // req.body.password = passwordhash;
            // const cpasswordhash = await bcrypt.hash(req.body.cpassword, 10);
            // req.body.cpassword = cpasswordhash;

            if (req.body.password === req.body.cpassword) {
                const register = await adminregister.create({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    cpassword: req.body.cpassword,
                    city: req.body.city,
                    phone: req.body.phone,  
                });
                if (register) {
                    return res.json({ "status": "1", "msg": "User successfully register" });
                } else {
                    return res.json({ "status": "0", "msg": "User unsuccessfully register" });
                }
            }
            else {
                return res.json({ "status": "0", "msg": "Conform Password is Not Match" });
            }
        }
    }
    catch (err) {
        return res.json({ "status": "0", "msg": err });
    }
}

module.exports.adminlogin = async (req, res) => {
    const Alogin = await adminregister.findOne({ email: req.body.email });
    if (Alogin) {
        if (Alogin.password == req.body.password) {
            let token = jwtData.sign(Alogin.toJSON(), 'rnw', { expiresIn: 10000 });
            return res.json({ "status": "1", "token": token });
        } else {
            return res.json({ "status": "0", "msg": "Password is wrong" });
        }
    } else {
        return res.json({ "status": "0", "msg": "Email not found" });
    }
}

module.exports.fatchadmin = async (req,res) => {
    adminregister.find((err, val) =>{
        if(err)
        {
            return res.json({ "status": "0", "msg": "Admin Data not found" });
        }
        else
        {
            return res.json({ "status": "1", "Admin data": val });
        }
    }); 
}