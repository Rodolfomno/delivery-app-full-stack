const { Users } = require('../../database/models');

const createUser = async (user) => {
  const newUser = await Users.create({ ...user, role: 'customer' });
  console.log(newUser);
  return newUser;
};

module.exports = { createUser };
