const playlists = require('./WRITE');         //importing schema
const mongoose = require('mongoose');

//connection creation                   [db=youtube]
mongoose.connect("mongodb://localhost:27017/youtube")
.then(()=> console.log("Connection successful...!"))
.catch((err)=> console.log(err));

//delete course where author is samuel

const del1 = async (author) => {
    const res = await playlists.deleteOne({author});
    console.log(res);
}

// del1("Samuel");

/*
- we can also use findByIdAndDelete()
*/