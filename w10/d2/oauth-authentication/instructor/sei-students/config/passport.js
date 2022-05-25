const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Student = require('../models/student');

// Talk to google and handle the response
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    // THIS IS THE VERIFY Callback Fn.
    function (accessToken, refreshToken, googleProfile, cb) {
      /**
       * @prop {1- Fetch the user from the database and provide them back to Passport by calling}
       * @prop {1a - If the user does not exist, we have a new user! We will add them to the database and pass along this new user in the }
       * @prop {1b - If the user exists, then we will just sign them in}
       */

      console.log('I AM VERIFY CALLBACK:', accessToken, refreshToken, googleProfile);

      Student.findOne({ googleId: googleProfile.id })
        .then((student) => {
          // a returning user, we can just tell passport to sign them in
          if (student) {
            if (student.avatar) {
              return cb(null, student);
            }
            student.avatar = googleProfile.photos[0].value;
            student.save().then((student) => cb(null, student));
          }

          // we have a new student via OAuth!
          const newStudent = new Student({
            name: googleProfile.displayName,
            email: googleProfile.emails[0].value,
            googleId: googleProfile.id,
            avatar: googleProfile.photos[0].value,
          });

          return newStudent.save();
        })
        .then((newStudent) => cb(null, newStudent))
        .catch((err) => cb(err));
    }
  )
);

// Encode user
passport.serializeUser(function (student, done) {
  done(null, student.id);
});

// Decode user
passport.deserializeUser(function (id, done) {
  // THIS IS USER THAT WILL APPEAR ON The --------> req.user
  Student.findById(id)
    .then((student) => {
      done(null, student);
    })
    .catch((err) => done(err));
});
