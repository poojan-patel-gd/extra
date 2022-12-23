const express = require('express');

const routes = express.Router();

const passport = require('passport');
const passsprtjwt = require('../config/passport-jwt-strategy');

const registercontrollerUser = require('../controllers/RegisterControllerUser');
const registercontrollerAdmin = require('../controllers/RegisterControllerAdmin');



// User controller
routes.post('/', registercontrollerUser.register);
routes.post('/login', registercontrollerUser.login);
routes.get('/fatchuser',passport.authenticate('jwt', { session: false}),registercontrollerUser.fatchuser);
routes.delete('/deleteuser', registercontrollerUser.deleteuser);

// Admin controller
routes.post('/admin', registercontrollerAdmin.adminregister);
routes.post('/alogin', registercontrollerAdmin.adminlogin);
routes.get('/fatchadmin', registercontrollerAdmin.fatchadmin);




module.exports = routes;