const authRouter = require('./auth');
const usersRouter = require('./users');
module.exports = function (app) {
    app.use('/api', authRouter);
    app.use('/api/users', usersRouter);
}