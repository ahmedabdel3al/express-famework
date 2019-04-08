const UserCreatedLisnter = require('./UserCreated/SendActiveMail');
module.exports= function (app) {
    app.on('UserCreated', UserCreatedLisnter.sendActiveMail);
}
