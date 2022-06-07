const moment = require('moment');
const { Sales, SalesProducts } = require('../../database/models');

module.exports = async (newSale, products) => {
  const { id: insertedId } = await Sales.create({ saleDate: moment(), ...newSale });
  
  const insertSoldProducts = products.map(
    async (product) => SalesProducts.create({ saleId: insertedId, ...product }),
    );
    
  await Promise.all(insertSoldProducts);
  
  return insertedId;
};
