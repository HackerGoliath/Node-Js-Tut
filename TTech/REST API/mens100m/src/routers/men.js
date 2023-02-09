const express = require('express');
const router = new express.Router();
const MensRanking = require("../models/mens");


router.post('/mens', async (req, res) => {
    try {
        const addingMensRecord = new MensRanking(req.body)
        const insertMens = await addingMensRecord.save();
        if (!insertMens) {
            res.status(400).send("Error in adding mens");
        } else {
            res.status(201).send(insertMens);
        }
    } catch (e) {
        res.status(400).send(e);
    }
});

// Get mens data
router.get('/mens', async (req, res) => {
    try {
        const getMens = await MensRanking.find().sort({ "ranking": 1 })
        res.send(getMens);
    } catch (e) {
        res.status(500).send(e);
    }
});

// Get men data by id
router.get('/mens/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const getMen = await MensRanking.findById(_id)
        res.send(getMen);
    } catch (e) {
        res.status(500).send(e);
    }
});

// Update men data by id
router.patch('/mens/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const getMen = await MensRanking.findByIdAndUpdate(_id, req.body, { new: true })
        res.send(getMen);
    } catch (e) {
        res.status(500).send(e);
    }
});

// Delete men data by id
router.delete('/mens/:id', async (req, res) => {
    try {
        const getMen = await MensRanking.findByIdAndDelete(req.params.id)
        res.send(getMen);
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router;