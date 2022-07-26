const { Router } = require('express');
const authMiddleware = require('../../middleware/authMiddleware');
const saleValidation = require('../../middleware/saleValidation');
const saleController = require('../controller/saleController');

const saleRouter = Router();

saleRouter.post('/', authMiddleware, saleValidation, saleController.checkoutSale);
saleRouter.get('/', authMiddleware, saleController.getAllSalesByUserIdOrSellerId);
saleRouter.get('/:id', authMiddleware, saleController.getSaleById);
saleRouter.patch('/:id', authMiddleware, saleController.updateStatus);

module.exports = saleRouter;
