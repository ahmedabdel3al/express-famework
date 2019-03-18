const User = require('./../../model/User');
const createUser = async function store(req) {
    //create user
    var user = new User({
        name : req.body.name,
        password:req.body.password,
        email : req.body.email,
        is_active: false,
    });
    return  await user.save();

}
module.exports = createUser;
