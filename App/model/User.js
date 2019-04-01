/***
 *  @todo User Model  
*/
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

/**
 *  User Collection in mongodb 
*/
const userSchema = new mongoose.Schema({
    name : {type:String,required:true},
    password:{type:String,required:true},
    email : {type:String,required:true},
    is_active: {type:Boolean,default:false},
    remember_token:{ type:String,default:null},
},{timestamps:true})

/**
 * set attribute password when saving a new user 
*/
userSchema.pre('save', function (next) {
    let user = this;
    if (!user.isModified('password')) {return next()};
    bcrypt.hash(user.password,10).then((hashedPassword) => {
        user.password = hashedPassword;
        next();
    })
}, function (err) {
    next(err)
})
/**
 *  compare password is method avilable
 *  in userSchema instance
 */
userSchema.methods.comparePassword = async function (candidatePassword) {
    let user  = this 
    const match = await bcrypt.compare(candidatePassword, user.password);
    return match ;
  };
const User = mongoose.model('User',userSchema)
module.exports = User ;