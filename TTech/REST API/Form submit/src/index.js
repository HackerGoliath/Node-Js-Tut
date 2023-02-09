const express = require('express');
const path = require("path");
const hbs = require('hbs');
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
})

app.post("/register", async (req, res) => {
    try {
        // console.log(req.body.name);
        // res.send(req.body.name);
        const registerEmployee = new Register({
            name: req.body.name,
            email: req.body.email
        });
        const result = await registerEmployee.save();
        console.log(result);
        res.send(result);

    } catch (e) {
        res.send(e)
    }

})

app.listen(PORT, () => {
    console.log(`Listening at http://${HOST}:${PORT}`);
})