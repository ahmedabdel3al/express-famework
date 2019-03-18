var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var usersRouter = require('./routes/users');
var auth = require('./App/middleware/auth');
var app = express();
var jade = require('jade');
const mongoose = require('mongoose');

//define db connection with mongodb
mongoose.connect("mongodb://localhost:27017/learningnodejs", {useNewUrlParser: true})
        .then(()=>{console.log('mongodb connecting .....')}) 
        .catch((err)=>{console.error('error while connecting with mongodb...' ,err)});
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'jade')


app.use(auth);
app.use('/api/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json(err.message);
});

module.exports = app;
