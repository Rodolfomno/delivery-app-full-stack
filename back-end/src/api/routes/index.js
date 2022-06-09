const { Router } = require('express');
const loginRouter = require('./login');
const productRouter = require('./product');
const registerRouter = require('./register');
const saleRouter = require('./sale');
const userRouter = require('./user');

const routes = Router();

routes.use('/login', loginRouter);
routes.use('/register', registerRouter);
routes.use('/products', productRouter);
routes.use('/sale', saleRouter);
routes.use('/user', userRouter);

module.exports = routes;
