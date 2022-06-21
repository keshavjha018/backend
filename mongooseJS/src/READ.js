const playlists = require('./WRITE');         //importing schema
const mongoose = require('mongoose');

//connection creation                   [db=youtube]
mongoose.connect("mongodb://localhost:27017/youtube")
.then(()=> console.log("Connection successful...!"))
.catch((err)=> console.log(err));

//2. READ

// i. show author names of only 1 frontend courses
const getDoc = async() =>{
    const result = await playlists.find({ctype: "Frontend"})
    .select({author:1})
    .limit(1);

    console.log(result);
}

// ii. get courses with videos > 75     [comparison operator]
const getDoc2 = async () => {
    const result = await playlists.find({videos : {$gt:75}})
    .select({name:1, videos:1});

    console.log(result);
}

//iii. courses with ctype frontend or backend       ["in" operator]
const getDoc3 = async () => {
    const result = await playlists.find({ctype : {$in:['Frontend', "backend"]}})
    .select({name:1, ctype:1});

    console.log(result);
}

//iii. courses with ctype frontend AND author is keshav       ["AND" operator]
const getDoc4 = async () => {
    const result = await playlists.find({$and: [{ctype:"Frontend"}, {author:"Keshav"}]})
    .select({name:1, ctype:1, author:1});

    console.log(result);
}


//COUNT
//count of courses
const getDoc5 = async () => {
    const result = await playlists.find()
    .countDocuments();

    console.log(result);
}

//SORT
//sort by course name - desc order(-1)
const getDoc6 = async () => {
    const result = await playlists.find()
    .sort({ctype: -1});
    

    console.log(result);
}

// getDoc6();