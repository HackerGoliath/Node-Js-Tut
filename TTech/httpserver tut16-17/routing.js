const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req.url)
    if (req.url == "/") {
        res.end('Hello from the Home page')
    }
    else if (req.url == "/about") {
        res.end("Hello from the About page")
    }
    else if (req.url == "/contact") {
        // res.write("Hello from the Contact page")
        // res.end()
        // is same as 
        res.end("Hello from the Contact page")
    }
    else {
        // Tell the browser it is a error page and change its Content type
        res.writeHead(404, { "Content-type": "text/html" }); // response header
        res.end("<h1>404 page not found</h1>")
    }
})

// listening request
server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to the port number: http://localhost:8000');
})