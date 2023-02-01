const express = require('express');
const app = express();
const port = 3000;
const host = 'localhost'

app.get("/", (req, res) => {
    res.write("Welcome to the home page");
    res.write("<h1>Welcome to the home page</h1>");
    res.send()
});

app.get("/about", (req, res) => {
    res.send("Welcome to the about page");
});

app.get("/contact", (req, res) => {
    res.send("Welcome to the contact page");
});

// app.get("/temp", (req, res) => {
//     res.send([
//         {
//             id: 1,
//             name: "Deepak"
//         },
//         {
//             id: 1,
//             name: "Deepak"
//         },
//         {
//             id: 1,
//             name: "Deepak"
//         },
//     ]);
// });

app.get("/temp", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Deepak"
        },
        {
            id: 1,
            name: "Deepak"
        },
        {
            id: 1,
            name: "Deepak"
        },
    ]);
});
// The methods are identical when an object or array is passed,
// but res.json() will also convert non-objects, such as null and undefined,which are not valid json

app.listen(port, () => {
    console.log(`Listening at http://${host}:${port}`);
});