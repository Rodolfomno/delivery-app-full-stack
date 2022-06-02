const fs = require('fs');
const jwt = require('jsonwebtoken');
const loginService = require('../service/loginService');

const secret = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf8' }).trim();

const addUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const newUser = await loginService.create({ name, email, password });
    
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

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await loginService.getUser(email, password);
    if (!user) {
      return res.status(400).json({ message: 'Invalid fields' });
    } 

    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: user }, secret, jwtConfig);

    const response = { ...user.dataValues, token };

    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { 
  addUser,
  login,
};
