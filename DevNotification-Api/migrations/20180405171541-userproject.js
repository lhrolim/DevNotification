module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('userproject', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      // foreign key usage
      project_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'project',
          key: 'id'
        }
      },

      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }

    });
  },

  down: (queryInterface, Sequelize) => queryInterface.dropTable('userproject')
};
