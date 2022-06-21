//Creating our own local server
import http from "http";

//                            (request, response)
const server = http.createServer((req, res) => {
    //response after creating server
    console.log(req.url);   //url module -> access site url
    //res.end => sends data to localhost:8000
    res.end("Hello! server started");
});

//listen to request  at port -
//      localhost:(8000, IP Address)
server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to port 8000");
});