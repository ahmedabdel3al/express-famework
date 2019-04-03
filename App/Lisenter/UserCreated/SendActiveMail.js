const Mail = require('./../../Mail/MailConfigration');
const sendActiveMail = async (payload) => {

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "abolya2011@gmail.com, ahmed.abdelaal@code95.info", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>" // html body
    };

    const transporter = Mail.transporter()
    try{
        transporter.sendMail(mailOptions)
    }catch (e) {
        console.log(e)
    }


    }


module.exports = {sendActiveMail}