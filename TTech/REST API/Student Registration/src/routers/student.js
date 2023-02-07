const express = require('express');
const router = new express.Router();

// Step 2: Define the router
router.get("/deepak", (req, res) => {
    res.send("Hello from router");
});

module.exports = router;