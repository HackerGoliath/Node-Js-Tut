const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 8000;
const host = 'localhost';

// Public static path
const static_path = path.join(__dirname, '../public');
app.use(express.static(static_path));

// Dynamic pages
app.set('view engine', 'hbs');
const template_path = path.join(__dirname, '../templates/views')
const partial_path = path.join(__dirname, "../templates/partials")
app.set('views', template_path);
hbs.registerPartials(partial_path);

// Routing
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/weather", (req, res) => {
    res.render("weather");
});

app.get("*", (req, res) => {
    res.render("404error", {
        errorMsg: "Oops! Page Not Found"
    });
});

app.listen(port, () => {
    console.log(`Listenig on http://${host}:${port}`);
});

