const saleService = require('../service/saleService');
const saleObject = require('../utils/saleFactory');

const checkoutSale = async (req, res, next) => {
  const newSale = saleObject(req.body);
  const { products } = req.body;
  try {
    const response = await saleService(newSale, products);

    if (response.message === 'Seller and customer cannot be the same') {
      return res.status(409).json(response);
    }
    if (response.message) return res.status(404).json(response);

    return res.status(201).json({ saleId: response });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { checkoutSale };
