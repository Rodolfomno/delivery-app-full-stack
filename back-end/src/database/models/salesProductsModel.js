module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define(
    'SalesProducts',
    {
      quantity: DataTypes.INTEGER,
    }, 
    { 
      timestamps: false,
      underscored: true,
      tableName: 'sales_products',
    },
  );

  SalesProducts.associate = (models) => {
    models.Sales.belongsToMany(models.Products, {
      foreignKey: 'saleId',
      otherKey: 'productId',
      as: 'products',
      through: SalesProducts,
    });

    models.Products.belongsToMany(models.Sales, {
      foreignKey: 'productId',
      otherKey: 'saleId',
      as: 'sales',
      through: SalesProducts,
    });
  }

  return SalesProducts;
};