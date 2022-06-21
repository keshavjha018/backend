const details = {
    name: "Keshav",
    age: 21,
    desc: "Student"
}

//convert object to json
const jsonData = JSON.stringify(details);
console.log(jsonData);

//convert back - json to object
const objData = JSON.parse(jsonData);
console.log(objData);