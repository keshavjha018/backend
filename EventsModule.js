//Built in Node js module called EVENTS
// create, fire and listen to your own events

const EventEmitter = require("events"); //create class
const event = new EventEmitter();   //object created


//event listener
event.on('SayMyName', () => {
    console.log("Name is Keshav");
});

//multiple callbacks
event.on('SayMyName', () => {
    console.log("Name is Aman");
});

event.on('SayMyName', () => {
    console.log("Name is VK");
});

//event emit (send)
event.emit("SayMyName");    //event created

// --------------2nd example--------

event.on('checkPage', (sc,msg) => {
    console.log(`status code is ${sc} and page is ${msg}`);
});

event.emit('checkPage', 200, "ok");