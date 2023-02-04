const express = require('express');
const app = express();
const PORT = 8000;
const HOST = 'localhost';
const sendMail = require("./controllers/sendMail");

app.get("/", (req, res) => {
    res.send("I am a server")
});

app.get("/mail", sendMail);

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Listening on http://${HOST}:${PORT}`);
        });
    } catch (error) {

    }
};

start();