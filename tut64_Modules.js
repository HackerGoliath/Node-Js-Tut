// We can install third party modules by npm

// Built in modules
// const fs = require('fs');
// let text = fs.readFileSync("test.txt", "utf-8")
// text = text.replace("Name", "Rohan");

// console.log("The content of the file is:")
// console.log(text);

// console.log("Creating a new file");
// fs.writeFileSync("rohan.txt", text)

const http = require('http');
const fs = require('fs');

let text = fs.readFileSync("test.txt", "utf-8")
text = text.replace("Name", "Rohan");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(text);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});