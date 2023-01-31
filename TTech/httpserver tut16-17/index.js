/*
The http.createServer() mebod includes request and response parameters which is supplied by Node.js.
The request object can be used to get information about the current http request eg.url, request header, and data.
response object can be used to send a response for a curr
If the response from the HTTP server is supposed to be displa
you should include an HTTP header with the correct content ty
*/

const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello from the other side')
})

// listening request
server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to the port number: http://localhost:8000');
})