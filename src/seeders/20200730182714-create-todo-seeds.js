'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let todoTitles = ['read a book', 'do search', 'find a course', 'ride a bike', 'complete a project']
    const currentTime = new Date();
    const todos = todoTitles.map(title => ({
      title,
      isDone: false,
      date: new Date(currentTime.getFullYear(), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28)),
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('Todos', todos )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Todos', null);
  }
};
