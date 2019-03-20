/**
 * store validate form request 
 */
const User = require('./../../model/User');
const _ = require("lodash");
const {check,validationResult} = require('express-validator/check');

const rule = [
    check('password').isAlpha().isLength({min:5}),
    check('email').
    isEmail().custom(async (value, { req }) => {
      let user = await User.findOne({ email: value });
  
      if (_.isEmpty(user)) {
        return false;
      }
    })
    .withMessage("Email Does not Exist"),
    (req, res, next) => { 
        // Finds the validation errors in this request and wraps them in an object with handy functions
      const errors = validationResult(req);
      //check isEmpty for error
      if (!errors.isEmpty()) {
          return res.status(422).json({errors: errors.array()});
      }
      next();
     }
  ];


module.exports = {rule};