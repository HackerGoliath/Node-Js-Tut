const fs = require('fs')
const bioData = {
    name: "Deepak",
    age: 30,
    address: "Somewhere"
}

// console.log(bioData.address);

// convert object to json
// const jsonData = JSON.stringify(bioData);
// console.log(jsonData);
// undefined or throws error, you can not perform operations like this on json
// console.log(jsonData.address);

// convert json to object
// const objData = JSON.parse(jsonData);
// console.log(objData.address);

// TODO:
// 1: convert to JSON
// 2: write to a separate file
// 3: read from file
// 4: again convert back to object
// 5: show on console

const jsonData = JSON.stringify(bioData);
fs.writeFile('json1.json', jsonData, (err) => {
    console.log("Done");
})

fs.readFile('json1.json', 'utf-8', (err, data) => {
    console.log(data);
    const orgData = JSON.parse(data);
    console.log(orgData);
})