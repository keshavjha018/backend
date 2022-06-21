//File System CHALLENGE - Synchronous method

const fs = require("fs");

//create a folder
fs.mkdirSync("challengeFolder");

//create a file bio.txt and add data
fs.writeFileSync("challengeFolder/bio.txt", "This is my bio. ");

//add more data
fs.appendFileSync("challengeFolder/bio.txt", "I am Keshav Jha");

//read data without getting buffer
const bufferData = fs.readFileSync("challengeFolder/bio.txt");
realData = bufferData.toString();
console.log(`Real Data: ${realData}`);

//rename to myBio.txt
fs.renameSync("challengeFolder/bio.txt", "challengeFolder/bio.txt");