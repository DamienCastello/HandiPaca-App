'use strict';
module.exports = (sequelize, DataTypes) => {
  const Example = sequelize.define('Example', {
    anExample: DataTypes.STRING
  }, {});
  Example.associate = function(models) {
    Example.hasMany(models.Facility, {as: 'facility'});
  };
  return Example;
};