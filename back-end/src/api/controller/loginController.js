const fs = require('fs');
const jwt = require('jsonwebtoken');
const loginService = require('../service/loginService');

const secret = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf8' }).trim();

const getUserConstroller = async (req, res, _next) => {
  const { email, password } = req.body;

  const user = await loginService.getUser(email, password);

  if (!user) return res.status(401).json({ message: 'sei la' });

  res.status(200).json(user);
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await loginService.getUser(email);
    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' });
    } 

    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: user }, secret, jwtConfig);
    return res.status(200).json(token);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { 
  getUserConstroller, 
  login,
};
