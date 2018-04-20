

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('organization', {
      name: { type: Sequelize.STRING, allowNull: false },
      url: { type: Sequelize.STRING }
    }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('organization')
};
