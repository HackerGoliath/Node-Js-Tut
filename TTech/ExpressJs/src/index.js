// install handlebar :npm i hbs
// create folder views(name must be views)

const express = require('express');
const { handlebars } = require('hbs');
const path = require("path");
const host = 'localhost';
const port = 8000;
const app = express();

// to set the view engine(handlebars), first parameter must be 'view engine'
app.set('view engine', 'hbs');

// Using midleware express.static
// const staticPath = path.join(__dirname, '../public/responsivewebsite');
// app.use(express.static(staticPath))

// top to bottom rule follows(only first get with same path renders and close the connection)
// template engine route
app.get("", (req, res) => {
    res.render("index", {
        myTitle: "Deepak Bhai"
    })
});

// app.get("/", (req, res) => {
//     res.send("Hello from express server")
// })

app.listen(port, () => {
    console.log(`Listening at http://${host}:${port}`);
})