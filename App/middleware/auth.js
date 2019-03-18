function auth(req, res, next) {
    console.log('in auth.js');
    next();
}

module.exports = auth;