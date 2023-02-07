const express = require('express');
require("./db/conn");
const Student = require("./models/students");
const app = express();
const port = process.env.PORT || 8000;
const host = 'localhost';

// Express Router-> Step 1: Create a router
const router = new express.Router();
// Step 2: Define the router
router.get("/deepak", (req, res) => {
    res.send("Hello from router");
});
// Step 3: Register the router
app.use(router);


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

// Create new student using promises
// app.post("/students", (req, res) => {
//     // console.log(req.body);
//     const user = new Student(req.body)
//     console.log(user);

//     user.save().then(() => {
//         res.status(201).send(user);
//     }).catch((e) => {
//         res.status(400).send(e)
//     });
// });

// Create new student using async await
app.post("/students", async (req, res) => {
    try {
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Read the data of registered students
app.get("/students", async (req, res) => {
    try {
        const studentsData = await Student.find();
        res.status(201).send(studentsData);
    } catch (e) {
        res.status(400).send(e);
    }
});

// Get the data of individual student using id
// app.get("/students/:name", async (req, res) => {
app.get("/students/:id", async (req, res) => {
    try {
        // console.log(req.params);
        // const _id = req.params.name;
        const _id = req.params.id;
        // const studentData = await Student.find({ name: _id })
        const studentData = await Student.findById(_id)
        console.log(studentData);
        if (!studentData) {
            res.status(404).send();
        }
        else {
            res.status(201).send(studentData);
        }
    } catch (e) {
        res.status(500).send(e);
    }
});

// Update the students data
app.patch("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        // const updateStudents = await Student.findOneAndUpdate({ email: _id }, req.body, { new: true });
        const updateStudents = await Student.findByIdAndUpdate(_id, req.body, { new: true });
        res.status(201).send(updateStudents);
    } catch (e) {
        res.status(404).send(e);
    }
});

// Delete the student record by id
app.delete("/students/:id", async (req, res) => {
    try {
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if (!req.params.id) {
            return res.status(404).send();
        }
        else {
            res.status(200).send(deleteStudent);
        }
    } catch (e) {
        res.status(500).send(e);
    }
});

app.listen(port, () => {
    console.log(`Connection established on http://${host}:${port}`);
});

