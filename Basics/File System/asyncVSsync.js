const fs = require("fs");

// //sync
const data = fs.readFileSync("asyncFile.txt",'utf-8');
console.log(data);
console.log("after read");
//printed in serialised way

//Async
fs.readFile("asyncFile.txt",'utf-8', (err, data) => {
    console.log(data);
});
console.log("after read");
//after data gets printed first => since reading takes time
// context switching type