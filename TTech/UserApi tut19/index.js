const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    const data = fs.readFileSync("userapi.json", "utf-8");
    const objData = JSON.parse(data);

    if (req.url == "/") {
        res.end("This is Home Page")
    }
    else if (req.url == "/userapi") {
        // fs.readFile(`${__dirname}/UserApi tut19/userapi.json`, "utf-8", (err, data) => {
        //     console.log(data);
        // })

        // fs.readFile(`userapi.json`, "utf-8", (err, data) => {
        //     // console.log(data);
        //     // res.end(data)
        //     const objData = JSON.parse(data);
        //     res.end(objData[2].firstName)
        // })
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(objData[2].firstName)
    }
    else {
        res.writeHead(404, { 'Content-type': 'text/html' })
        res.end("<h1>404 Page Not Found</h1>")
    }
})
server.listen(8000, '127.0.0.1', () => {
    console.log('Server is running on: http://localhost:8000')
})
