'use strict';
// const {
//   Model
// } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    name: {
      type: DataTypes.STRING
    },
  })
  User.associate = (models) => {
    User.belongsToMany(models.Todos, {
      through: "TodoUsers",
      // as: 'todos',
      foreignKey: 'userId'
    })
  }
  return User;
};