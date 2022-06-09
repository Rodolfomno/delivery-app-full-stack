const { Router } = require('express');
const authMiddleware = require('../../middleware/authMiddleware');
const saleValidation = require('../../middleware/saleValidation');
const saleController = require('../controller/saleController');

const saleRouter = Router();

saleRouter.post('/', saleValidation, saleController.checkoutSale);
saleRouter.get('/:id', authMiddleware, saleController.getSaleById);
saleRouter.get('/orders/:id', saleController.getAllSalesByUserId);

module.exports = saleRouter;
