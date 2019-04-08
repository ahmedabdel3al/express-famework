require('http-errors');
require('express-async-errors')
const express = require('express');
const env = require('dotenv');
const app = express();

/**
 * set app configuration
 */
require('./App/config/app')(app)
/***
 * set database configuration
 */
env.config();
require('./App/config/database')()

/**
 *  handing event listener
 * */
require('./App/Lisenter/index')(app)
/**
 *  set app routes
 * */
require('./routes/index')(app)
/**
 *  handling error
 * */
require('./App/Handler/index')(app);

module.exports = app;
