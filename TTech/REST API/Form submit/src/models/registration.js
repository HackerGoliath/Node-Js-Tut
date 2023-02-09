const mongoose = require('mongoose');

const registerPerson = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String
    },
})

const Register = new mongoose.model("Register", registerPerson);
module.exports = Register;