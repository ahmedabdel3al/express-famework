/***
 *  @todo User Model  
*/
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name : {type:String,required:true},
    password:{type:String,required:true},
    email : {type:String,required:true},
    is_active: {type:Boolean,default:false},
    created_at:{ type:Date,default:Date.now},
    updated_at:{ type:Date,default:Date.now},
    remember_token:{ type:String,default:null},
})

const User = mongoose.model('User',userSchema)
module.exports = User ;