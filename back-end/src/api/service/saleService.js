const moment = require('moment');
const { Sales, SalesProducts } = require('../../database/models');

const create = async (newSale, products) => {
  if (newSale.sellerId === newSale.userId) {
    return { message: 'Seller and customer cannot be the same' };
  }

  const { id: insertedId } = await Sales.create({ saleDate: moment(), ...newSale });

  const insertSoldProducts = products.map(async ({ id: productId, qtd: quantity }) => ( 
    SalesProducts.create({ saleId: insertedId, productId, quantity })));

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

const findSaleById = async (userId, saleId) => {
  const sale = await Sales.findAll({ 
    where: { id: saleId, userId },
    include: { all: true, attributes: { exclude: ['password'] } },
    attributes: { exclude: ['userId', 'sellerId'] },
  });
  if (!sale) return { message: 'Sale not found' };
  return sale;
};

module.exports = { create, findAllSalesByUserId, findSaleById };
