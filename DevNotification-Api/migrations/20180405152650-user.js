module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('user', {
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
  }).then(r => queryInterface.addConstraint('user', ['email'], {
    type: 'unique',
    name: 'uq_user_email'
  }).then(r => queryInterface.addConstraint('user', ['userid'], {
    type: 'unique',
    name: 'uq_user_uid'
  }))),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('user')
};
