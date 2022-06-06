const { Sales, SalesProducts } = require('../../database/models');
const saleObject = require('../utils/saleFactory');

const insertSale = async (newSale) => {
  const { insertedId } = await Sales.create(saleObject(newSale));
  console.log(insertedId);

  const insertSoldProducts = newSale.products.map(
    async (product) => SalesProducts.create({ saleId: insertedId, ...product }),
  );

  await Promise.all(insertSoldProducts);
};

module.exports = insertSale;
