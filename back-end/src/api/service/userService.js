const { Users } = require('../../database/models');

const getAllSeller = async () => {
  const data = await Users.findOne({ where: { role: 'seller' }, attributes: ['id', 'name'] });
  if (!data) return false;
  const seller = data.dataValues;

  return seller;
};

module.exports = { 
  getAllSeller, 
};