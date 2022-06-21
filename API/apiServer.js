const http = require("http");
const fs = require("fs");

//                            (request, response)
const server = http.createServer((req, res) => {
    //url module -> access site url
    //ROUTES
    if (req.url == "/") {
        res.write("Welcome Home !");
        res.end();
    }
    else if (req.url == "/about") {
        res.end("This is About !");
    }
    else if (req.url == "/userAPI") {
        //synchronously reading the json api file
        //${__dirname} -> current directory
        fs.readFile(`${__dirname}/userAPI.json`, 'utf-8', (err,data) => {
            res.writeHead(200, {"content-type" : "application/json"});
            res.end(data);      //send data to localhost:8000
        } );
    }
    //if any wronh path/url requested => 404
    else{
        res.writeHead(404, {"content-type" : "text/html"}); //tells browser the type of data we are playing with
        //error 404 i.e. client error [400-499]
        res.end("<h3> error 404 </h3>");
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to port 8000");
});