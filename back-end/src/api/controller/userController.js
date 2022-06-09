const userService = require('../service/userService');

const getAllSeller = async (req, res, next) => {
  try {
    const seller = await userService.getAllSeller();
    if (!seller) {
      return res.status(404).json({ message: 'Not Found' });
    }
    return res.status(200).json(seller);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { 
  getAllSeller,
};