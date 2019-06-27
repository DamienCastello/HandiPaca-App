'use strict';
module.exports = (sequelize, DataTypes) => {
  const Facility = sequelize.define('Facility', {
    streetNumber: DataTypes.STRING,
    streetName: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    city: DataTypes.STRING,
    other: DataTypes.STRING,
    exempleId: DataTypes.INTEGER
  }, {});
  Facility.associate = function(models) {
    Facility.belongsTo(models.Exemple, {as: 'exemple'});
  };
  return Facility;
};