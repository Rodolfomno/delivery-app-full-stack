const jwt = require('../utils/jwt');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) res.status(401).json({ message: 'Token not found' });
  try {
    const user = jwt.verify(token);
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};