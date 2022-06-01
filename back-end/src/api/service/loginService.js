const { Users } = require('../../database/models');


const getUser = async (email, _password) => {
  const user = await Users.findOne({ where: { email } });
  console.log(user);
  return user;
};

const create = async (user) => {
  const newUser = await Users.create({...user, role: 'customer'});
  console.log(newUser);
  return newUser;
};

module.exports = { 
  getUser, 
  create,
};
