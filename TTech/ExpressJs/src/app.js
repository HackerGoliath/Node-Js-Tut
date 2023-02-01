const express = require('express');
const path = require("path");

const app = express();

// Relative path -> eg: .././etc

// Gives Absolute path
// console.log(__dirname);

// console.log(path.join(__dirname, '../public'));
const staticPath = path.join(__dirname, '../public');

// Use built in middleware express.static to serve static pages
app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.send("Hello World from express js");
});

app.get("/about", (req, res) => {
    res.send("Hello World from express js about page");
});

app.listen(8000, () => {
    console.log("Listening at http://localhost:8000");
});