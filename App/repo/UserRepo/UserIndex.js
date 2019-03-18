const User = require('./../../model/User');
const getUser = async function index(req) {

    return  await User.find();

}
module.exports = getUser;
