/**
 * routes to login,register,forgetpassword,resetpassword
 */
const express = require('express');
const router = express.Router();
const LoginFormRequest = require('./../App/FormRequest/auth/LoginFormRequest');
const LoginController = require('./../App/controller/Auh/LoginController');


/* login route */
router.post('/sign-in',LoginFormRequest.rule,LoginController.login);

module.exports = router;