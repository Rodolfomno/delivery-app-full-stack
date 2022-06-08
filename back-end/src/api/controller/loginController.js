const jwt = require('../utils/jwt');
const loginService = require('../service/loginService');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await loginService.getUser(email, password);
    if (!user) {
      return res.status(404).json({ message: 'Not Found' });
    } 
    delete user.password;

    const token = jwt.sign(user);

    const response = { ...user, token };

    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { 
  login,
};