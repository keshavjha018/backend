const playlists = require('./WRITE');         //importing schema
const mongoose = require('mongoose');

//connection creation                   [db=youtube]
mongoose.connect("mongodb://localhost:27017/youtube")
.then(()=> console.log("Connection successful...!"))
.catch((err)=> console.log(err));

//3. UPDATE
//update author name of aman to Aman

const updateAuthor = async (author) => {
    const res = await playlists.updateOne({author}, {
        $set: {
            author: "Aman"
        }
    },{
        new: true   // prints updated data [in console]
    } );
    console.log(res);
};

updateAuthor("aman");