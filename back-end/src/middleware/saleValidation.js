const { saleSchema } = require('../api/schemas/index');

module.exports = async (req, _res, next) => {
  try {
    await saleSchema.validateAsync(req.body);
    return next();
  } catch (error) {
    return next(error);
  }
};
