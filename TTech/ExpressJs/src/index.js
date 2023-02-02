// install handlebar :npm i hbs
// create folder views(name must be views)
// reflect change in server if any of the file changes
// nodemon src/index.js -e js,hbs 

const express = require('express');
const { handlebars } = require('hbs');
const path = require("path");
const hbs = require('hbs')
const requests = require('requests')
const host = 'localhost';
const port = 8000;
const app = express();

// to set the view engine(handlebars), first parameter must be 'view engine'
app.set('view engine', 'hbs');

// Change default directory of tempalte engine 'views' to 'templates'
const templatePath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")
app.set('views', templatePath);
hbs.registerPartials(partialsPath)

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

// app.get("/about", (req, res) => {
//     // console.log(req.query);
//     params = {
//         name: req.query.name,
//         age: req.query.age
//     }
//     res.render("about", params)
// });

const API_KEY = "your api here"
app.get("/about", (req, res) => {
    requests(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=${API_KEY}`)
        .on("data", (chunk) => {
            // convert json data to object
            const objData = JSON.parse(chunk);
            // convert object into array of an object
            const arrData = [objData]
            console.log(`City name is ${arrData[0].name} and temperature is ${arrData[0].main.temp - 273}`);
            // const realTimeData = arrData.map((val) => replaceVal(homeFile, val)).join("")
            res.write(arrData[0].name);
            // // console.log(realTimeData);
        })
        .on("end", (err) => {
            if (err) return console.log("Connection closed due to errors", err)
            res.end();
        })
});

app.get("/about/*", (req, res) => {
    params = {
        errorcomment: "Oops! This About Us page not found"
    }
    res.render("404", params)
});

app.get("*", (req, res) => {
    params = {
        errorcomment: "Oops! Page not found"
    }
    res.render("404", params)
});

// app.get("/", (req, res) => {
//     res.send("Hello from express server")
// })

app.listen(port, () => {
    console.log(`Listening at http://${host}:${port}`);
})