const { Router } = require('express');
const userController = require('../controller/userController');

const loginRouter = Router();

loginRouter.get('/seller', userController.getAllSeller);

module.exports = loginRouter;