'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('organization', {
      name: { type: Sequelize.STRING, allowNull: false },
      url: { type: Sequelize.STRING }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('organization');
  }
};
