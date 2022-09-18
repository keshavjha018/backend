const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const app = express();

// Import Passport file
const passportSetup = require("./passport");

// Import AUTH Routes
const authRoute = require("./routes/auth.routes");


app.use(
    cookieSession({
        name: "session",
        keys: ["env-secret-key"],
        maxAge: 24 * 60 * 60 * 100      // expires in 1 day
    })
);

app.use(passport.initialize());
app.use(passport.session());

// Allows to send via client server req
app.use(
    cors({
        origin: "http://locahost:3000",     // Frontend URL
        methods: "GET, POST, PUT, DELETE",
        credentials: true,
    })
);

// Routes
app.use("/auth", authRoute);



const PORT = 8000;
app.listen(PORT, ()=> {
    console.log("Server Running ...");
})