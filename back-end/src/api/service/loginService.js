const md5 = require('md5');
const { Users } = require('../../database/models');

const getUser = async (email, password) => {
  const user = await Users.findOne({ where: { email } });

  if (!user) return false;

  const hashPassword = md5(password);

  if (hashPassword !== user.password) return false;

  return user;
};

const create = async (user) => {
  const newUser = await Users.create({ ...user, role: 'customer' });
  console.log(newUser);
  return newUser;
};

module.exports = { 
  getUser, 
  create,
};
