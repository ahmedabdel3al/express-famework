/**
 * store validate form request 
 */
const {check,validationResult} = require('express-validator/check');

const rule = [
    check('name').isAlpha().isLength({min:5}),
        check('password').isAlpha().isLength({min:5}),
        check('email').isEmail(),
    (req, res, next) => { 
        // Finds the validation errors in this request and wraps them in an object with handy functions
      const errors = validationResult(req);
      return res.status(422).json({errors: errors.array()});
      //check isEmpty for error
      if (!errors.isEmpty()) {
          return res.status(422).json({errors: errors.array()});
      }
     }
  ];


module.exports = {rule};