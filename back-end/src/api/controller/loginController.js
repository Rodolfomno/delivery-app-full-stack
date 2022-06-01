const loginService = require('../service/loginService');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const secret = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf8' }).trim();
const getUserConstroller = async (req, res, _next) => {
  const { email, password } = req.body;

  const user = await loginService.getUser(email, password);

  if (!user) return res.status(401).json({ message: 'sei la' });

  res.status(200).json(user);
};

const addUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const newUser = await loginService.create({ name, email, password,  });
    
    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: newUser }, secret, jwtConfig );
    return res.status(201).json(token);
  } catch (error) {
    console.log(error);
    next(error)
  }

};

module.exports = { 
  getUserConstroller, 
  addUser,
};
