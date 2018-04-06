'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {


    return queryInterface.createTable('user', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      userid: {
        type: Sequelize.STRING,
        allowNull: false
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(queryInterface.addConstraint('User', ['email'], {
        type: 'unique',
        name: 'uq_user_email'
    }).then(queryInterface.addConstraint('User', ['userid'], {
        type: 'unique',
        name: 'uq_user_uid'
    })));

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user');
  }
};
