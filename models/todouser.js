'use strict';
// const {
//   Model
// } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const TodoUser = sequelize.define('TodoUser', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    todoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Todo',
        key: 'id'
      }
    },
  })
  return TodoUser;
};