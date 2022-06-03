const { Products } = require('../../database/models');

const getAllProducts = async () => {
  const products = await Products.findAll();
  console.log(products);
  return products;
};

module.exports = { 
  getAllProducts, 
};