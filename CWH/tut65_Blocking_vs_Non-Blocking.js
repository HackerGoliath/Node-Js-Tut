/*
Synchronous or blocking
- line by line execution

const fs = require('fs');
let text = fs.readFileSync("test.txt", "utf-8")
console.log("This is a message:");
console.log(text);
*/
/*
Asynchronous or non-blocking
- line by line execution not guarenteed
- callbacks will fire
*/
const fs = require('fs');
// Asynchronous function requires callbacks
// (here: (err,data)=>{} is a callback function)
// callback functions runs when readFile finished reading data

fs.readFile("test.txt", "utf-8", (err, data) => {
    console.log(err, data);
})
console.log("This is a message:");