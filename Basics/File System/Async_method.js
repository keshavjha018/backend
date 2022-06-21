//Asynchronous way

const fs = require("fs");

//writing
fs.writeFile("asyncFile.txt", "This a asynchronous method to write", (err) => {
    console.log("file created");
    console.log(err);
});

//append
fs.appendFile("asyncFile.txt", ". Appended item", (err) => {
    console.log("done");
});

//reading
fs.readFile("asyncFile.txt","UTF-8", (err, data) => {
    console.log(data);
});