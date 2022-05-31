module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define(
    'Sales',
    {
      userId: DataTypes.INTEGER,
      sellerId: DataTypes.INTEGER,
      totalPrice: DataTypes.DECIMAL(9, 2),
      deliveryAddress: DataTypes.STRING,
      deliveryNumber: DataTypes.STRING,
      saleDate: { type: DataTypes.DATETIME, defaultValue: DataTypes.NOW },
      status: DataTypes.STRING,
    }, 
    { 
      timestamps: false,
      underscored: true,
    },
  );

  Sales.associate = (models) => {
    Sales.belongsTo(models.Users, {
      foreignKey: 'userId', as: 'users',
    });
    Sales.belongsTo(models.Users, {
      foreignKey: 'sellerId', as: 'users',
    });
  };

  return Sales;
};