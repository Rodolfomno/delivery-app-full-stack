const { Router } = require('express');
const productController = require('../controller/productController');
const authMiddleware = require('../../middleware/authMiddleware');

const productRouter = Router();

productRouter.get('/', authMiddleware, productController.getAllProducts);

module.exports = productRouter;
