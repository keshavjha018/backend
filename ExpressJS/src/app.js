/*
    - most popular nodejs framework
    - provides simple API to build websites/webapps etc.
    - easier [5x less time (than nodeJS) to make REST API server]
*/

/*
create API
get -> read( to get data from server) 
post -> create (new data)
put -> update
delete -> delete
*/

const express = require("express");
const app = express();      //now app variable contains various method and properties

// show homepage(/) data
//         (http request, responst(sent by express app))
// request(present in url) - query string, parameters, body, http headers etc

//homepage
app.get("/",(req, res) => {
    res.send("HOME");
})

//about page
app.get("/about",(req, res) => {
    res.send("ABOUT");
})

app.listen(8000, () => {
    //what to do after listening
    console.log("Listening port at 8000");
})
