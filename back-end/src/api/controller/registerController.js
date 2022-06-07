const jwt = require('../utils/jwt');
const registerService = require('../service/registerService');

const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const newUser = await registerService({ name, email, password });

    if (newUser.message) return res.status(409).json(newUser.message);
    
    delete newUser.password;
    const token = jwt.sign(newUser);
    return res.status(201).json({ ...newUser, token });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { register };
