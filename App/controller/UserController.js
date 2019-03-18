const createUser = require('./../repo/UserRepo/UserStore');
const getUser = require('./../repo/UserRepo/UserIndex');
const {validationResult,check} = require('express-validator/check');
/**
 * @todo list users
 * @param req
 * @param res
 * @param next
 * @return users
 * */
async  function index(req, res, next) {
   const result  = await getUser(req);
   if(!result){
       return res.status(419).json(result)
   }
   return res.status(200).json(result)
}
/**
 * @todo create new user
 * @param req
 * @param res
 * @param next
 * @return users list
 * */
async function store(req, res, next) {
    //await for create user
    const result =await createUser(req);
    if(!result){
       return  res.status(419).json(result);
    }
    return res.status(200).json(result)
}

module.exports = {index, store};
