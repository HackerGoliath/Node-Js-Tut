const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

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
    cpassword: {
        type: String
    },
    gender: {
        type: String
    },
});

registerPerson.pre("save", async function (next) {
    if (this.isModified) {
        // const passHash = await bcrypt.hash(password, 10);
        console.log(`The current password is ${this.password}`);
        this.password = await bcrypt.hash(this.password, 10);
        console.log(`The current password is ${this.password}`);
        this.cpassword = undefined;
    }
    next();
});

const Register = new mongoose.model("Register", registerPerson);
module.exports = Register;