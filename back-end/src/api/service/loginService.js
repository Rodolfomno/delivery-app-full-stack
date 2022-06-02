const bcrypt = require('bcrypt');
const { Users } = require('../../database/models');

const getUser = async (email, password) => {
  const user = await Users.findOne({ where: { email } });

  if (!user) return false;

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) return false;

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
