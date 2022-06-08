const md5 = require('md5');
const { Users } = require('../../database/models');

const getUser = async (email, password) => {
  const data = await Users.findOne({ where: { email, password: md5(password) } });
  if (!data) return false;
  const user = data.dataValues;
  // const hashPassword = md5(password);

  // if (hashPassword !== user.password) return false;

  return user;
};

module.exports = { 
  getUser, 
};