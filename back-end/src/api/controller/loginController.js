const loginService = require('../service/loginService');

const getUserConstroller = async (req, res, _next) => {
  const { email, password } = req.body;

  const user = await loginService.getUser(email, password);

  if (!user) return res.status(401).json({ message: 'sei la' });

  res.status(200).json(user);
};

module.exports = { getUserConstroller };