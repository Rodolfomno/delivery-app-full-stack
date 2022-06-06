const { Router } = require('express');
const loginRouter = require('./login');
const productRouter = require('./product');
const registerRouter = require('./register');

const routes = Router();

routes.use('/login', loginRouter);
routes.use('/register', registerRouter);
routes.use('/products', productRouter);

module.exports = routes;
