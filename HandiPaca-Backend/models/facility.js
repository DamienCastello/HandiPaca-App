'use strict';
module.exports = (sequelize, DataTypes) => {
  const Facility = sequelize.define('Facility', {
    streetNumber: DataTypes.STRING,
    streetName: DataTypes.STRING,
    postalCode: DataTypes.INTEGER,
    city: DataTypes.STRING,
    longitude: DataTypes.STRING,
    latitude: DataTypes.STRING,
    other: DataTypes.STRING,
    exampleId: DataTypes.INTEGER,
    validate: DataTypes.BOOLEAN,
    archive: DataTypes.BOOLEAN
  }, {});
  Facility.associate = function(models) {
    Facility.hasMany(models.Example, {as: 'example'});
  };
  return Facility;
};