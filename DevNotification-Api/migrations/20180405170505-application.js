'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('application', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      name: { type: Sequelize.STRING },
      description: { type: Sequelize.STRING },
      repourl: { type: Sequelize.STRING, allowNull: false },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(r=> {queryInterface.addConstraint('Application', ['name'], {
      type: 'unique',
      name: 'uq_app_name'
    })})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('application');
  }
};
