const moment = require('moment');
const { Sales, SalesProducts } = require('../../database/models');

const create = async (newSale, products) => {
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

const findAllSalesByUserId = async (userId) => {
    const sales = await Sales.findAll({
      where: { userId },
      attributes: ['id', 'saleDate', 'totalPrice', 'status'],
    });

    if (sales.length === 0) return { message: 'No orders found for this customer' };

    return sales;
};

module.exports = { create, findAllSalesByUserId };
