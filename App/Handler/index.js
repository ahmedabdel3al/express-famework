const log = require('../config/winston')
module.exports = function (app) {
    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
        next({message: 'route not found'});
    });
// error handler
    app.use(function (err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};
        log.error(err.message);
        // render the error page
        res.status(err.status || 500);
        res.json(err.message);

    });
    /*/!**
 * handling un catch exception
 * *!/
process.on('uncaughtException', (ex) => {
    console.log('we are have an error')
})
/!**
 * handling unhandledRejection
 * *!/
process.on('unhandledRejection', (ex) => {
    throw new Error(ex)
})*/
}