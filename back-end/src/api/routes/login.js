const { Router } = require('express');
const loginController = require('../controller/loginController');
const loginValidation = require('../../middleware/loginValidation');

const loginRouter = Router();

loginRouter.post('/', loginValidation, loginController.login);

module.exports = loginRouter;
