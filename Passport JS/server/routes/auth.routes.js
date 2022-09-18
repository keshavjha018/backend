const router = require('express').Router();
const passport = require('passport');

const CLIENT_URL = "http://locahost:3000/";

// CASE: Login successful
router.get("/login/success", (req, res) => {
    if (req.user) {
        res.status(200).json({
            error: false,
            message: "Login successful",
            user: req.user
            // cookies: req.cookies
        });
    }
    else {
        res.status(403).json({error: true, message: "Not Authorized"});
    }
});

// CASE: Login fail
router.get("/login/failed", (req, res) => {
    res.status(401).json({
        error: true,
        message: "Login fail"
    });
});


// Logout
router.get("/logout", (req, res) => {
    req.logout();
    res.redirect(CLIENT_URL);
});

// router.get("/google", passport.authenticate("google", { scope: ["profile"]}));
router.get("/google", passport.authenticate("google", {scope: ["profile", "email"]}));

router.get("/google/callback", 
    passport.authenticate("google", {
        successRedirect: CLIENT_URL,
        failureRedirect: "/login/failed"
    })
);

module.exports = router;