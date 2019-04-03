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



router.get('/test',function (req,res,next) {

    /*const testing_data =
        [{
            "column": "first_name",
            "operation": "is_equal",
            "value": ["Reda"],
            "sub_operation": "and",
            "id": "1554280538826"
        }, {
            "column": "gender",
            "operation": "not_equal",
            "value": ["male"],
            "sub_operation": "or",
            "id": "1554280651661"
        }, {
            "column": "last_name",
            "operation": "is_equal",
            "value": ["Ali"],
            "sub_operation": "and",
            "id": "1554280672204"
        }, {
            "column": "gender",
            "operation": "is_equal",
            "value": ["female"],
            "sub_operation": null,
            "id": "1554280714633"
        }];*/

   const testing_data =[{
       "group": "user_data",
       "column": "first_name",
       "operation": "is_equal",
       "value": ["Osama"],
       "sub_operation": "and",
       "id": "1554280538826"
   }, {
       "group": "user_data",
       "column": "last_name",
       "operation": "is_equal",
       "value": ["Ali"],
       "sub_operation": "and",
       "id": "1554280636185"
   }, {
       "group": "user_data",
       "column": "gender",
       "operation": "is_equal",
       "value": ["male"],
       "sub_operation": "or",
       "id": "1554280651661"
   }, {
       "group": "user_data",
       "column": "first_name",
       "operation": "is_equal",
       "value": ["Ahmed", "Nermeen"],
       "sub_operation": "or",
       "id": "1554280672204"
   }, {
       "group": "user_data",
       "column": "first_name",
       "operation": "is_equal",
       "value": ["Samar"],
       "sub_operation": "and",
       "id": "1554280698429"
   }, {
       "group": "user_data",
       "column": "gender",
       "operation": "is_equal",
       "value": ["female"],
       "sub_operation": null,
       "id": "1554280714633"
   }]
    const operation_mapping={
        is_equal:'$eq',
        not_equal:'$ne',
        greater_than:'$gt',
        less_than:'$lt',
        greater_than_or_equal: '$gte',
        less_than_or_equal:'$lte',
    }
    const final_data =  [];
    var   andding_data = [];
    var   orExist = false
    testing_data.forEach(function(item,index){
         andding_data.push({
            [item.column] : {
                [operation_mapping[item.operation]] : item.value[0]
            }
        });
        if(item.sub_operation=='or'){
            orExist = true ;
            final_data.push({"$and":andding_data})
            andding_data= [];
        }
        if(item.sub_operation==null){
            final_data.push({"$and":andding_data})
            andding_data= [];
        }
    })
    if(!orExist)return res.status(200).json(final_data)
    return res.status(200).json({$or:[final_data]})
});


module.exports = router;
