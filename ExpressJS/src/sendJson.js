const express = require('express');
const app = express();
const port = 5000  || process.env.port;

app.get("/", (req,res) => {
    res.json([   //or res.send
        {
            id : 12,
            name : "Keshav"
        },
        {
            id : 121,
            name : "Keshav"
        }
    ])
});

app.listen(port, () =>{
    console.log(`Listening port ${port}`);
});