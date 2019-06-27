'use strict';
module.exports = (sequelize, DataTypes) => {
  const Place = sequelize.define('Place', {
    streetNumber: DataTypes.STRING,
    streetName: DataTypes.STRING,
    postalCode: DataTypes.INTEGER,
    city: DataTypes.STRING,
    numberOfPlaces: DataTypes.INTEGER,
    longitude: DataTypes.STRING,
    latitude: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    facilityId: DataTypes.INTEGER
  }, {});
  Place.associate = function(models) {
    Place.belongsTo(models.Category, {as: 'category'});
  };
  return Place;
};