const mongoose = require('mongoose');

//connection creation                   [db=youtube]
mongoose.connect("mongodb://localhost:27017/youtube")
.then(()=> console.log("Connection successful...!"))
.catch((err)=> console.log(err));


//schema- defines the str of doc. [data type etc]
const playlistSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
        unique:true
    },
    ctype: {
        type: String,
        uppercase: true
    },
    videos: {
        type: Number,
        //custom validator
        validate(value){
            if(value < 0){
                throw new Error("Video count can't be -ve");
            }
        }
    },
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
});

//Models - creating collections(table)
                                //    name          schema
const Playlist = new mongoose.model("Playlist", playlistSchema );

//1. WRITE

//insert documents(tuples)
const createDoc = async()=>{
    try{
        const reactPlaylist= new Playlist({
            name: "React JS",
            ctype: "Frontend",
            videos: "80",
            author: "Keshav",
            active: true
        })

        const jsPlaylist= new Playlist({
            name: "JS",
            ctype: "Frontend",
            videos: "140",
            author: "aman",
            active: true
        })

        const nodePlaylist= new Playlist({
            name: "node JS",
            ctype: "backend",
            videos: "40",
            author: "mohit",
            active: true
        })

        const result = await Playlist.insertMany([reactPlaylist,jsPlaylist,nodePlaylist]);
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}

createDoc();

module.exports = Playlist;