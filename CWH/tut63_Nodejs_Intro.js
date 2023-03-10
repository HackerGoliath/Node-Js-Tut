/*
Some REPL Techniques:
_ => Refers to the previous variable
Press Tab 2 times to get list of global variables
*/

// console.log("Hello World");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    // res.end('Hello World This is Rohan Das');

    res.setHeader('Content-Type', 'text/html');
    res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Box shadow and text shadow</title>
    <style>
        .container{
            display: flex;
        }

        .card{
            /* border: 2px solid grey; */
            padding: 23px 34px;
            margin: 23px 13px;
            background-color: wheat;
            /* box-shadow: 10px 10px tomato; */
            /* box-shadow: -10px -10px tomato; */
            /* box-shadow: 10px -10px 23px tomato; here 23px is blur radius */
            /* Syntax: for box shadow is: */
            /* box-shadow: offset-x offset-y blur radius spread radius; */
            /* box-shadow: 10px -10px 23px 8px rgba(255, 38, 0, 0.911); 4th arg in rgb is alpha it decides the darkness of the color */
            /* for box-shadow: inside box */
            /* box-shadow: inset 10px 10px 49px 30px orangered; */
            /* Multiple Shadows */
            box-shadow: inset 10px 10px 49px 30px orangered,10px 10px 23px 8px red;
        }

        .card h2{
            text-shadow: 2px 3px green;
            text-shadow: 2px 3px 2px grey;
            text-shadow: -3px 3px 2px grey;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="card" id="card-1">
            <h2>This is C++</h2>
            <p>Now C++ course has started it does not mean that HTML course stops it will continue accordingly Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est praesentium nobis doloribus quas. Delectus, similique! Saepe laborum vitae porro quos temporibus cum nostrum alias, aperiam quam sunt non inventore veritatis tenetur. Consequuntur, sit nisi!</p> 
        </div>
        <div class="card" id="card-2">
            <h2> Card2</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est praesentium nobis doloribus quas. Delectus, similique! Saepe laborum vitae porro quos temporibus cum nostrum alias, aperiam quam sunt non inventore veritatis tenetur. Consequuntur, sit nisi!</p>
        </div>
        <div class="card" id="card-3">
            <h2>Card3</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est praesentium nobis doloribus quas. Delectus, similique! Saepe laborum vitae porro quos temporibus cum nostrum alias, aperiam quam sunt non inventore veritatis tenetur. Consequuntur, sit nisi!</p>
        </div>
    </div>
</body>

</html>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});