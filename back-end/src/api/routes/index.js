const { Router } = require('express')
const loginRouter = require('./login')

const routes = Router();

routes.use('/login', loginRouter);


module.exports = routes;