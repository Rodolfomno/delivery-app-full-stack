const { Router } = require('express');
const registerValidation = require('../../middleware/registerValidation');
const registerController = require('../controller/registerController');

const registerRouter = Router();

registerRouter.post('/', registerValidation, registerController.register);

module.exports = registerRouter;
