/**
 * @todo this method to get users collection
 * 
*/

const User = require('./../../App/model/User');
async function getUsers(){
    try{
        console.log('bolyfci')
      return await User.find();
    }catch(error){
      console.log('error while retriving data .... ');
      return [] ;
    }
}

module.exports.getUsers = getUsers