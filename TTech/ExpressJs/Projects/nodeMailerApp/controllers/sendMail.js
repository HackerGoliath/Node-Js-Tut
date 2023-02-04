const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();

    // Connect with SMTP


    // create reusable transporter object using the default SMTP transport
    let transporter = await nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        // secure: false, // true for 465, false for other ports
        auth: {
            user: 'kathryn2@ethereal.email',
            pass: 'evtjGsYNhmRg8XPZaT' // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <deepak@gmail.com>', // sender address
        to: "deep@gmail.com", // list of receivers
        subject: "Hello ✔ Deepak", // Subject line
        text: "Hello world? from Deepak", // plain text body
        html: "<b>Hello from Deepak</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);

    res.json(info);
}

module.exports = sendMail;