/**
 * login controller 
*/
const User = require('./../../model/User');
const Jwt=require('./../../JwtHelper/Jwt');
/**
 * @todo  login user to system 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @return json response
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
            return res.status(403).json({
               error:"incorrect password "
            });
        }
        let token = Jwt.signToken(user._id)
        if(!token){
            res.status(419).json({error:"Server Down please try again ... "}) 
        }
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

async function getUserByEmail(email){
    let user = await User.findOne({email});
   return user ;
}
module.exports ={login}