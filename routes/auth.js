/**
 * routes to login,register,forget password,reset password
 */
const express = require('express');
const router = express.Router();
const LoginFormRequest = require('./../App/FormRequest/auth/LoginFormRequest');
const RegisterFormRequest = require('./../App/FormRequest/auth/RegisterFormRequest');
const LoginController = require('../App/controller/Auth/LoginController');
const RegisterController = require('../App/controller/Auth/RegisterController');


/* login route */
router.post('/sign-in',LoginFormRequest.rule,LoginController.login);
router.post('/register',RegisterFormRequest.rule,RegisterController.register);



module.exports = router;
