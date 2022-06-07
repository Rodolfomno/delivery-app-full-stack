const moment = require('moment');
const { Sales, SalesProducts } = require('../../database/models');

module.exports = async (newSale, products) => {
  if (newSale.sellerId === newSale.userId) {
    return { message: 'Seller and customer cannot be the same' };
  }

  const { id: insertedId } = await Sales.create({ saleDate: moment(), ...newSale });

  const insertSoldProducts = products.map(
    async (product) => SalesProducts.create({ saleId: insertedId, ...product }),
  );

  try {
    await Promise.all(insertSoldProducts);
  } catch (err) {
    return { message: 'Products not found' };
  }

  return insertedId;
};
