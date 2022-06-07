const md5 = require('md5');
const { Users } = require('../../database/models');

module.exports = async (user) => {
  const checkExists = await Users.findOne({ where: { email: user.email } });
  if (checkExists) return { message: 'User already exists' };

  const hash = md5(user.password); 
  const newUser = await Users.create({
    name: user.name,
    email: user.email,
    password: hash,
    role: 'customer',
  });

  return newUser;
};
