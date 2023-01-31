const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("I am a server");
})