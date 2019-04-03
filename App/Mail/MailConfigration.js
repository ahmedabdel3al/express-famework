const nodemailer = require("nodemailer");

const transporter = ()=>{
// create reusable transporter object using the default SMTP transport
    return nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.PORT_MAIL_HOST,
        secure: false,
        auth: {
            user: process.env.USER_MAIL_HOST,
            pass: process.env.PASSWORD_MAIL_HOST
        }
    });
}


module.exports = {transporter}

