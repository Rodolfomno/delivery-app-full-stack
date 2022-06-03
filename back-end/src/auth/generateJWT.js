const fs = require('fs');
const jwt = require('jsonwebtoken');

const signToken = (payload) => {
const secret = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf8' }).trim();

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const token = jwt.sign({ data: payload }, secret, jwtConfig);
return token;
};

module.exports = signToken;
