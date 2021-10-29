const passport = require('passport');

require('./localStrategy');
require('./jwt.strategy');

function passportConfig(server) {
  server.use(passport.initialize());
}

module.exports = passportConfig;
