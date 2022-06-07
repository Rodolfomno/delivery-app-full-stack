const { Router } = require('express');
const saleValidation = require('../../middleware/saleValidation');
const saleController = require('../controller/saleController');

const saleRouter = Router();

saleRouter.post('/', saleValidation, saleController.checkoutSale);

module.exports = saleRouter;