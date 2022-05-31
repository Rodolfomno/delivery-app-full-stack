module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define(
    'Products',
    {
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL(9, 2),
      urlImage: DataTypes.STRING,
    }, 
    { 
      timestamps: false,
      underscored: true,
    },
  );

  return Products;
};