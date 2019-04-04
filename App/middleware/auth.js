const Jwt = require('./../JwtHelper/Jwt');
/**
 * @todo check if user authired or not 
 * @return json or next
 */
function auth(req, res, next) {
    var token = req.headers['access-token'];
    if(!token) return res.status(419).json({error:"No token provided"})

    const decode=Jwt.verfiyToken(token,process.env.JWT_TOKEN_SECRET)
    if(!decode) return res.status(419).json({error:'invalid token'})
    req.id = decode._id
    next();
}

module.exports = auth;