const { Router } = require('express');
const loginController = require('../controller/loginController');

const loginRouter = Router();

loginRouter.post('/', loginController.getUserConstroller);

module.exports = loginRouter;
