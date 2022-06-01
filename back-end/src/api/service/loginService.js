const { Users } = require('../../database/models');

const getUser = async (email, password) => {
  const user = await Users.findOne({ where: { email } })
  console.log(user);
  return user;
}

module.exports = { getUser };