const jwt = require("jsonwebtoken")
const loginService = require('../api/service/loginService');
const fs = require('fs');
const { decode } = require("punycode");

const secret = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf8' }).trim();


module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const decoded = jwt.verify(token, secret);
    console.log("decoded", decoded);
    const user = await loginService.getUser(decoded.data.email);
    if (!user) {
      return res.status(401).json({ messa: "Error searching user coming from token" });
    }
    
    req.user = user;

    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
};
