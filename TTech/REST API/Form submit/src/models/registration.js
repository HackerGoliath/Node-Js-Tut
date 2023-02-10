const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
    tokens: [{
        token: {
            type: String
        }
    }]
});

// Work as middlewares
// Generating Tokens
registerPerson.methods.generateAuthToken = async function () {
    try {
        // console.log(this._id);
        const token = await jwt.sign({ _id: this._id.toString() }, "secretKeyHere");
        this.tokens = this.tokens.concat({ token });
        await this.save();
        // console.log(token);
        return token
    } catch (e) {
        console.log("The error is", e);
        res.send("The error is ", e)
    }
}


// Converting password into hash
registerPerson.pre("save", async function (next) {
    if (this.isModified) {
        // const passHash = await bcrypt.hash(password, 10);
        // console.log(`The current password is ${this.password}`);
        this.password = await bcrypt.hash(this.password, 10);
        // console.log(`The current password is ${this.password}`);
        this.cpassword = await bcrypt.hash(this.password, 10);
    }
    next();
});

const Register = new mongoose.model("Register", registerPerson);
module.exports = Register;