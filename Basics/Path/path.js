const path = require("path");

console.log(path.extname("D:/Node JS/Path/path.js"));
console.log(path.basename("D:/Node JS/Path/path.js"));

//returns all details of the file - root, extension etc
console.log(path.parse("D:/Node JS/Path/path.js"));