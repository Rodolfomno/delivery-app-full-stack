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

const findAllSalesByUserIdOrSaleId = async (id, role) => {
  let sales;
  const attributes = ['id', 'saleDate', 'totalPrice', 'status'];
  switch (role) {
    case 'customer':
      sales = await Sales.findAll({ where: { userId: id }, attributes });
      break;
    case 'seller':
      sales = await Sales.findAll({ where: { sellerId: id }, attributes });
      break;
    default:
      sales = [];
      break;
  }

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

module.exports = { create, findAllSalesByUserIdOrSaleId, findSaleById };
