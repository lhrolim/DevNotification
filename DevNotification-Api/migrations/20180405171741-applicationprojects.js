

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('application_project', {
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

      currentversion: {
        type: Sequelize.STRING,
        allowNull: false
      },

      // foreign key usage
      application_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'application',
          key: 'id'
        }
      },

      project_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'project',
          key: 'id'
        }
      }

    });
  },

  down: (queryInterface, Sequelize) => queryInterface.dropTable('application_project')
};
