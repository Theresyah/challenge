'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  orders.init({
    status: DataTypes.STRING,
    alamat: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'orders',
  });
//tambah
 // user.associate = function(models){
    // user.belongsTo(models.user,{
    //   foreignKey:'id_item',
    //   as:'items',
    // })

  // };

  return orders;
  
};