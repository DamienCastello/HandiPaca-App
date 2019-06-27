'use strict';
module.exports = (sequelize, DataTypes) => {
  const HandicapPlace = sequelize.define('HandicapPlace', {
    streetNumber: DataTypes.STRING,
    streetName: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    city: DataTypes.STRING,
    numberOfPlaces: DataTypes.STRING,
    longitude: DataTypes.STRING,
    latitude: DataTypes.STRING
  }, {});
  HandicapPlace.associate = function(models) {
    // associations can be defined here
  };
  return HandicapPlace;
};