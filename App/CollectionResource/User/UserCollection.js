/**
 *  here is way to return User with only id , name and email
 * */

const toJson =function toJson(userInstance) {
    return {

        id: userInstance._id,
        firstName : userInstance.name,
        email: userInstance.email


    }
}

module.exports = {toJson}