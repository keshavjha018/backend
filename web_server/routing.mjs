//local server
import http from "http";

//                            (request, response)
const server = http.createServer((req, res) => {
    // console.log(req.url);   //url module -> access site url
    if (req.url == "/") {
        res.write("Welcome Home !");
        res.end();
    }
    else if (req.url == "/about") {
        res.end("This is About !");
    }
    else{
        res.writeHead(404, {"content-type" : "text/html"}); //error 404 i.e. client error [400-499]
        res.end("<h3> error 404 </h3>");
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to port 8000");
});