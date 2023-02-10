const mongoose = require('mongoose');

const registerPerson = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    age: {
        type: String
    },
    password: {
        type: String
    },
    gender: {
        type: String
    },
})

const Register = new mongoose.model("Register", registerPerson);
module.exports = Register;