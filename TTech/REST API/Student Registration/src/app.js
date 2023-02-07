const express = require('express');
require("./db/conn");
const Student = require("./models/students");
const app = express();
const port = process.env.PORT || 8000;
const host = 'localhost';

/*
You do not need express.json() and express.urlencoded() for GET request or DELETE request.
We only need it for POST and PUT request.
express.json() is a method inbuilt in express to recognize the request Object as a JSON object
This method is called as middleware in your application using the code app.use(express.json()) 
*/

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello from the Home Page")
});

// Create new student
app.post("/students", (req, res) => {
    // console.log(req.body);
    const user = new Student(req.body)
    console.log(user);

    user.save().then(() => {
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(e)
    });
});

app.listen(port, () => {
    console.log(`Connection established on http://${host}:${port}`);
});

