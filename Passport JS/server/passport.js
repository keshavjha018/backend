const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');

const GOOGLE_CLIENT_ID = "c";
const GOOGLE_CLIENT_SECRET = "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";


passport.use(new GoogleStrategy({   
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    scope: ['profile', 'email']
  },
  function(accessToken, refreshToken, profile, done) {

    done(null, profile)
    
    // // For DB
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });

    /*
    CASE: MONGO DB
    const user = {
        username: profile.diplayName,
        avatar: profile.photos[0],
    };
    user.save()... like that
     */
  }
));


passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user)
});

module.exports = passport;