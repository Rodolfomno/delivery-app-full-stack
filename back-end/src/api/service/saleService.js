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

const findSaleById = async (id, saleId, role) => {
  let sale;
  const include = { all: true, attributes: { exclude: ['password'] } };
  const attributes = { exclude: ['userId', 'sellerId'] };
  switch (role) {
    case 'customer':
      sale = await Sales.findAll({ where: { userId: id, id: saleId }, include, attributes });
      break;
    case 'seller':
      sale = await Sales.findAll({ where: { sellerId: id, id: saleId }, include, attributes });
      break;
    default:
      sale = [];
      break;
  }
  if (!sale) return { message: 'Sale not found' };
  return sale;
};

const updateStatus = async (id, status) => {
  await Sales.update({ status }, { where: { id } });
};

module.exports = { create, findAllSalesByUserIdOrSaleId, findSaleById, updateStatus };
