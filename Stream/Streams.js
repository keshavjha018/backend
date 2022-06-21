/* streaming means watching a media in real-time
pass data in small chunks [not all at a time]
each type of stream is an event emitter instance
data - fired when data avail to read
end -fired at end [no more data to read]
error - fired at error
finish - fired when all data has been flushed
*/

//streaming data in read.txt

const fs = require("fs");
const http = require("http");
const { Stream } = require("stream");

const server = http.createServer();

server.on('request', (req, res) => {

    // 1. without streaming 
    // var fs = require("fs");
    // fs.readFile("read.txt", (err,data) => {
    //     res.end(data.toString());
    // });

    //2. using streaming module

    //-----READ-----
    const rstream = fs.createReadStream('read.txt');

    // //-----WRITE- in Buffer----
    // rstream.on("data", (chunkdata) => {
    //     console.log("chunk received");
    //     res.write(chunkdata);
    // });

    // //-----END---- when buffer full

    // rstream.on('end', ()=>{
    //     res.end();
    // });

    // //------error handle-----

    // rstream.on('error', (err)=>{
    //     console.log(err);
    //     res.end("file not found err 404")
    // })


    //3.  pipe method
    // Stream.pipe() - is used to connect readable stream to writable stream
    
    rstream.pipe(res);
});

// listen
server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to port 8000");
});



