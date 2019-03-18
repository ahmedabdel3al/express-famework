const express = require('express');
const router = express.Router();
const UserStoreValidation = require('./../App/FormRequest/User/StoreUser');
const userController = require('../App/controller/UserController');

/* GET users listing. */
router.get('/', userController.index);

/*Post a new user*/
router.post('/',UserStoreValidation.rule, userController.store);


module.exports = router;
