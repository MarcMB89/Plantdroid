const { connect } = require('mongoose');
const debug = require('debug')('server: ddbbConfig');
const chalk = require('chalk');

connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
)
  .then(() => debug((`${chalk.bgGreen.black('Database connection established')}`)),
    (error) => debug((`${chalk.bgRed('Database connection error', error)}`)));
