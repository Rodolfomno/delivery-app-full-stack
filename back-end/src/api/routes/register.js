const { Router } = require('express');
const loginController = require('../controller/loginController');

const registerRouter = Router();

registerRouter.post('/', loginController.addUser);

module.exports = registerRouter;
