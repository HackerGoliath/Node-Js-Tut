const express = require('express');
const path = require("path");
const hbs = require('hbs');
const bcrypt = require("bcryptjs");
// const bodyParser = require("body-parser");
const app = express();
require("./db/conn");
const PORT = "8000";
const HOST = "localhost";
const Register = require("./models/registration");

// console.log(path.join(__dirname, "../public"));

// app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials")
app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/register", async (req, res) => {
    try {
        // console.log(req.body.name);
        // res.send(req.body.name);
        const password = req.body.password;
        const cpassword = req.body.cpassword;

        if (password == cpassword) {
            const registerEmployee = new Register({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                age: req.body.age,
                password: password,
                cpassword: cpassword,
                gender: req.body.gender,
            });
            const result = await registerEmployee.save();
            // res.send(result);
            res.render("login");
        }
        else {
            res.status(400).send("Passwords not matching")
        }
    } catch (e) {
        res.status(500).send("Server Error");
    }
});

app.post("/login", async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const result = await Register.findOne({ email });

        const isMatch = await bcrypt.compare(password, result.password);
        // if (result.password === password) {
        if (isMatch) {
            // res.send(result.password); // to know password
            res.render("index");
        }
        else {
            res.status(400).send("Invalid Email or Password");
        }
    } catch (error) {
        res.status(500).send("Server Error");
    }

});


/* Encryption (Two way communication)
deepak -> rghyokhg

hashing (One way communication)
deepak -> $fwfgw1241fg&^%*%*.sdarf1441.124141faffqfqef

Implementation of bcryptjs
const bcrypt = require("bcryptjs");
const securePassword = async (password) => {
    const passHash = await bcrypt.hash(password, 10);
    console.log(passHash);
    const passMatch = await bcrypt.compare(password, passHash);
    console.log(passMatch);
}
securePassword("deepak@123");
*/

app.listen(PORT, () => {
    console.log(`Listening at http://${HOST}:${PORT}`);
})