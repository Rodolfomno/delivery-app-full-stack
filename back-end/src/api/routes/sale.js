const { Router } = require('express');
const saleController = require('../controller/saleController');

const saleRouter = Router();

saleRouter.post('/', saleController.checkoutSale);

module.exports = saleRouter;
