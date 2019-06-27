'use strict';
module.exports = (sequelize, DataTypes) => {
  const Exemple = sequelize.define('Exemple', {
    exemple1: DataTypes.STRING,
    exemple2: DataTypes.STRING,
    exemple3: DataTypes.STRING
  }, {});
  Exemple.associate = function(models) {
    Exemple.hasMany(models.Facility, {as: 'facility'});
  };
  return Exemple;
};