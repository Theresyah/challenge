'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  items.init({
    nama: DataTypes.STRING,
    qty: DataTypes.INTEGER,
    harga: DataTypes.INTEGER,
    warna: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'items',
  });
//tambah
 // user.associate = function(models){
    // user.belongsTo(models.user,{
    //   foreignKey:'id_item',
    //   as:'items',
    // })

  // };

  return items;
  
};