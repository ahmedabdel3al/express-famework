const mongoose = require('mongoose');

module.exports = function () {
    mongoose.connect(process.env.DB_URL, {useNewUrlParser: true})
        .then(() => {
            console.log('mongodb connecting .....')
        }).catch((err) => {
        console.error('error while connecting with mongodb...', err)
    });

}
