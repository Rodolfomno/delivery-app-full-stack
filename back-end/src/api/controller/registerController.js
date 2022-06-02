const fs = require('fs');
const jwt = require('jsonwebtoken');
const registerService = require('../service/registerService');

const secret = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf8' }).trim();

const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const newUser = await registerService.createUser({ name, email, password });
    
    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: newUser }, secret, jwtConfig);
    return res.status(201).json(token);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { register };
