'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todos', {
    title: {
      type: DataTypes.STRING
    },
    isDone: {
      type: DataTypes.BOOLEAN
    },
    date: {
      type: DataTypes.DATE
    }
  })
  Todo.associate = (models) => {
      Todo.belongsToMany(models.Users, {
        through: 'TodoUsers',
        // as: 'assignedUsers', //'assignedUsers',
        foreignKey: 'todoId'
      })
    }
  return Todo;
};