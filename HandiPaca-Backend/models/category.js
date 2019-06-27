'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    categoryName: DataTypes.STRING
  }, {});
  Category.associate = function(models) {
    Category.hasMany(models.Place, {as: 'place'});
  };
  return Category;
};