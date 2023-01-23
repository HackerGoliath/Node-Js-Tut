const express = require('express');
const path = require('path');
const app = express();

hostname = 'localhost'
port = 800

// static files => Anyone can get file if he have link no authentication required
// for serving static files
app.use('/static', express.static('static'))

// Set the template engine as pug
app.set('view engine', 'pug')

// Set the views directory
app.set('views', path.join(__dirname, 'views'))

// pug demo endpoint
app.get('/demo', (req, res) => {
    res.status(200).render('demo', { title: 'Hey', message: 'Hello there! and thanks for telling me how to use pug' })
})

app.get("/", (req, res) => {
    res.status(200).send("This is home page of my express app");
})

app.get("/about", (req, res) => {
    res.send("This is about page of my express app");
})

app.get("/this", (req, res) => {
    res.status(404).send("This page is not found");
})

app.post("/about", (req, res) => {
    res.send("This is a post request from about page of my express app");
})

app.listen(port, () => {
    console.log(`The app started at port : http://${hostname}:${port}`);
})