const express = require('express');
const path = require('path');
require("./db/conn");
const hbs = require('hbs');
const app = express();
const Register = require("./models/registers");
const port = process.env.PORT || 3000;
const host = 'localhost';

// app.use(express.json());

// for getting json data from form
app.use(express.urlencoded({ extended: false }));

// console.log(path.join(__dirname, "../public"));
const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.get('/login', (req, res) => {
    res.render('login');
});

// Create a new Employee
app.post('/register', async (req, res) => {
    try {
        const password = req.body.password;
        const cpassword = req.body.confirmpassword;
        // if (password === cpassword) {
        //     res.send([req.body.firstname,
        //     req.body.lastname,
        //     req.body.email,
        //     req.body.gender,
        //     req.body.phone, req.body.age,
        //         password,
        //         cpassword]);
        // }
        if (password === cpassword) {
            const registerEmployee = new Register({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                gender: req.body.gender,
                phone: req.body.phone,
                age: req.body.age,
                password: password,
                confirmpassword: cpassword
            });

        } else {
            res.send("Passwords are not matching")
        }
        const result = await registerEmployee.save()
        if (result) {
            console.log(result);
            res.status(201).send(result);
        }
        else {
            res.status(500).send("Error saving document");
        }
    } catch (e) {
        res.status(400).send("Error in adding mens");
    }
});

app.post('/login', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        console.log(`Email: ${email} and Password : ${password}`);
    } catch (error) {
        res.status(400).send("Invalid Email");
    }
});

app.listen(port, () => {
    console.log(`Example app listening on http://${host}:${port}`);
});