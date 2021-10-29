require('dotenv').config();

const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const debug = require('debug')('server: plantdroid');
const cors = require('cors');

require('./database/ddbb.config');
require('./config/passport.config');

const server = express();
const port = process.env.PORT || 5000;

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

const authRouter = require('./routers/auth.routes');
const userRouter = require('./routers/user.routes');
const plantRouter = require('./routers/plant.routes');

server.use('/api/users', userRouter);
server.use('/api/plants', plantRouter);
server.use('/', authRouter);

server.listen(
  port,
  () => debug(`Server is running on ${chalk.bgBlue.black(`http://localhost:${port}`)}`)
);
