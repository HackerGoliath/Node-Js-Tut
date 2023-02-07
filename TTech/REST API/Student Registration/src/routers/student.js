const express = require('express');
const router = new express.Router();
const Student = require("../models/students");


// Step 2: Define the router
// router.get("/deepak", (req, res) => {
//     res.send("Hello from router");
// });

// Create new student using async await
router.post("/students", async (req, res) => {
    try {
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Read the data of registered students
router.get("/students", async (req, res) => {
    try {
        const studentsData = await Student.find();
        res.status(201).send(studentsData);
    } catch (e) {
        res.status(400).send(e);
    }
});

// Get the data of individual student using id
// router.get("/students/:name", async (req, res) => {
router.get("/students/:id", async (req, res) => {
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
router.patch("/students/:id", async (req, res) => {
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
router.delete("/students/:id", async (req, res) => {
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

module.exports = router;