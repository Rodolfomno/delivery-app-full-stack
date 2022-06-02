const signToken = require('../../auth/generateJWT');
const registerService = require('../service/registerService');

const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const newUser = await registerService.createUser({ name, email, password });

    const token = signToken({ name: newUser.name, email: newUser.password });
    return res.status(201).json(token);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { register };
