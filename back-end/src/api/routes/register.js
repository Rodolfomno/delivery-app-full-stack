const { Router } = require('express');
const registerController = require('../controller/registerController');

const registerRouter = Router();

registerRouter.post('/', registerController.register);

module.exports = registerRouter;
