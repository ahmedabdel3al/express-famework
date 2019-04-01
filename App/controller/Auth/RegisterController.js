/**
 * login controller
 */
const User = require('./../../model/User');
const Jwt = require('./../../JwtHelper/Jwt');
const _ = require("lodash");
const UserCollection = require('./../../CollectionResource/User/UserCollection');

/**
 * @todo  login user to system
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @return json response
 */
async function register(req, res, next) {
    const {email, password, name} = req.body
    const user = await createUser({email, password, name})
    let token = Jwt.signToken(user._id);
    if (!token) {
        res.status(400).json({error: 'error while storing user'})
    }
    req.app.emit('UserCreated', user);
    res.status(200).json(UserCollection.toJson(user))

}

async function createUser(object) {
    const user = await new User({
        name: object.name,
        email: object.email,
        password: object.password,
        remember_token: Math.random(50).toString(30)
    })
    user.save();
    return user;
}

module.exports = {register}