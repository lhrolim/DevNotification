

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('userapplication', {
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
      //  foreign key usage
      application_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Application',
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

  down: (queryInterface, Sequelize) => queryInterface.dropTable('userapplication')
};
