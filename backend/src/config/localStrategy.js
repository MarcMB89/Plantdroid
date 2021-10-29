const passport = require('passport');
const { Strategy } = require('passport-local');
const User = require('../models/user.model');

passport.use(
  'register',
  new Strategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    },
    async (req, email, password, done) => {
      try {
        const user = await User.findOne({ email });
        if (user) {
          return done(null, false, { message: 'Email already registered' });
        }
        if (!user) {
          const newUser = await User.create({
            email,
            password
          });
          return done(null, newUser);
        }
        return done(null, false, { message: 'Register works' });
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
  'login',
  new Strategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });

        if (!user) {
          return done(null, false, { message: 'User not registered' });
        }

        if (!user.isValidPassword(password)) {
          return done(null, false, { message: 'Wrong password' });
        }

        return done(null, user, { message: 'Access granted' });
      } catch (error) {
        return done(null, false, { message: 'Error' });
      }
    }
  )
);
