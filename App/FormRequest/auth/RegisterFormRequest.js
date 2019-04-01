/**
 * store validate form request 
 */
const User = require('./../../model/User');
const {check,validationResult} = require('express-validator/check');

const rule = [
    check('name').isAlpha().isLength({min:1}),
    check('password').isAlpha().isLength({min:5}),
    check('email').
    isEmail().custom(async (value, { req }) => {
      let user = await User.findOne({ email: value });
  
      if (user) {
        return false;
      }
    })
    .withMessage("Email Exist Before"),
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