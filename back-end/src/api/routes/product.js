const { Router } = require('express');
const productController = require('../controller/productController');
// const auth = require('../../auth/validadeJWT');

const productRouter = Router();

productRouter.get('/', productController.getAllProducts);

module.exports = productRouter;
