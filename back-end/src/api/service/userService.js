const { Users } = require('../../database/models');

const getAllSeller = async () => {
  const seller = await Users.findAll({ where: { role: 'seller' }, attributes: ['id', 'name'] });
  if (!seller) return false;

  return seller;
};

module.exports = { 
  getAllSeller, 
};
