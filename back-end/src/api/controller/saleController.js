const saleService = require('../service/saleService');
const saleObject = require('../utils/saleFactory');

const checkoutSale = async (req, res, next) => {
  const newSale = saleObject(req.body);
  const { products } = req.body;
  try {
    const saleIdInserted = await saleService(newSale, products);
    return res.status(201).json({ saleId: saleIdInserted });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { checkoutSale };
