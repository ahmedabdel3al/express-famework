/**
 * login controller 
*/
const jwt=require('jsonwebtoken');
const key = require('./../../../routes/key');
const User = require('./../../model/User');

/**
 * @todo  login user to system 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

async function login(req,res,next){
      try{
        const {email, password} = req.body
        const user = await getUserByEmail(email)
        if(!user){
            return res.status(403).json({
                error: "Incorrect details email"
            })
        }
        const isPassValid = await user.comparePassword(password)
        if(!isPassValid){
            return res.json(403).json({
               error:"incorrect password "
            });
        }
        let token = generateToken(user.id)
       
        res.status(200).json({
            userId:user.id,
            email:user.email,
            name:user.name,
            token
        })
      }catch(error){
          console.log(error)
          res.status(403).json({error:"incorrect password or email"})
      }
        
}


function generateToken(userId){
    let token=jwt.sign({userId:userId},key.tokenKey);
    return token; 
}

async function getUserByEmail(email){
    let user = await User.findOne({email});
   return user ;
}
module.exports ={login}