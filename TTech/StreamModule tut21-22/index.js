const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on("request", (req, res) => {
    // fs.readFile("input.txt", (err, data) => {
    //     if (err) return console.log(err);
    //     res.end(data.toString());
    // });

    // 2nd way - read data with stream
    // Reading from a stream
    // Create a readable stream
    // Handle stream events -> data,end and error
    // const rstream = fs.createReadStream("input.txt");
    // rstream.on("data", (chunkdata) => {
    //     res.write(chunkdata);
    // });
    // rstream.on("end", () => {
    //     res.end();
    // });
    // rstream.on("error", (err) => {
    //     console.log(err);
    //     res.end("File not found");
    // });

    // 3rd way
    const rstream = fs.createReadStream("input.txt");
    rstream.pipe(res);
});



server.listen(8000, '127.0.0.1', () => {
    console.log("Listening at port http://localhost:8000");
});