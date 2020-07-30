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
    let userNames = ['minh', 'huy', 'duy', 'huong', 'dat', 'phuong', 'ngoc']
    const users = userNames.map(name => ({
      name,
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('Users', users, )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null);
  }
};
