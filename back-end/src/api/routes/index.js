const { Router } = require('express');
const loginRouter = require('./login');
const registerRouter = require('./register');

const routes = Router();

routes.use('/login', loginRouter);
routes.use('/register', registerRouter);

module.exports = routes;
