const saleStatus = require('./saleStatus');

const saleObject = (sale) => ({
  userId: sale.userId,
  sellerId: sale.sellerId,
  totalPrice: sale.totalPrice,
  deliveryAddress: sale.deliveryAddress,
  deliveryNumber: sale.deliveryNumber,
  status: saleStatus.PENDENTE,
});

module.exports = saleObject;
