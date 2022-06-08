module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define(
    'Sales',
    {
      userId: DataTypes.INTEGER,
      sellerId: DataTypes.INTEGER,
      totalPrice: DataTypes.DECIMAL(9, 2),
      deliveryAddress: DataTypes.STRING,
      deliveryNumber: DataTypes.STRING,
      saleDate: { type: DataTypes.DATE, defaultValue: DataTypes.DATE },
      status: DataTypes.STRING,
    }, 
    { 
      timestamps: false,
      underscored: true,
      tableName: 'sales',
    },
  );

  Sales.associate = (models) => {
    Sales.belongsTo(models.Users, {
      foreignKey: 'userId', as: 'user',
    });
    Sales.belongsTo(models.Users, {
      foreignKey: 'sellerId', as: 'seller',
    });
  };

  return Sales;
};
