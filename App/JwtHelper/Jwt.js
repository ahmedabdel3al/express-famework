const jwt=require('jsonwebtoken');
/** 
 * @todo generate token for user
 * @return token
*/
const signToken =function signToken(UserId){
    return  jwt.sign({ id: UserId }, process.env.JWT_TOKEN_SECRET, {
        expiresIn: 86400 // expires in 24 hours
      });
}
/**
 * @todo verify token 
 * @return userId!null
 */
const verfiyToken =function verfiyToken(token){
    try{
        return jwt.verify(token, process.env.JWT_TOKEN_SECRET); 
    }
    catch(e)
    {
        return null;
    }
    
}
module.exports =  { signToken, verfiyToken }
