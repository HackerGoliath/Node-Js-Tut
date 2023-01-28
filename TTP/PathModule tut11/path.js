const path = require("path");

// console.log(path.dirname('D:/Practice/Node.js/TTP/PathModule tut11/path.js'));
// console.log(path.extname('D:/Practice/Node.js/TTP/PathModule tut11/path.js'));
// console.log(path.basename('D:/Practice/Node.js/TTP/PathModule tut11/path.js'));
// console.log(path.parse('D:/Practice/Node.js/TTP/PathModule tut11/path.js'));
const myPath = path.parse('D:/Practice/Node.js/TTP/PathModule tut11/path.js');
console.log(myPath.name);
