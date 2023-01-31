// IIFE(Immediately Invoked Function Expression) in JavaScript and Module Wrapper in NodeJs are same

// When a js file(module) is run whole file is wrapped under below module wrapper function
// this works behind the scene, if you write like this it does not run
// (function (exports, require, module, __filename, __dirname) {
//     const a = require('fs');
//     const name = "Deepak"
//     console.log(name);
//     module.exports = { afwqfeqef }
// });

// IIFE
// (function () {
//     const a = "Deepak Bhai"
//     console.log(a); // can not used outside oe this function
// })()

// This is used because of Module Wrapper Function
console.log(__dirname);
console.log(__filename);