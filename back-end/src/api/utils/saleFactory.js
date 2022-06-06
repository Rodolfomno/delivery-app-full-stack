const saleStatus = require('./saleStatus');

const saleObject = (sale) => ({
  userId: sale.userId,
  sellerId: sale.sellerId,
  totalPrice: sale.totalPrice,
  deliveryAdress: sale.deliveryAdress,
  deviveryNumber: sale.deviveryNumber,
  saleDate: sale.saleDate,
  status: saleStatus.PENDENTE,
});

module.exports = saleObject;
