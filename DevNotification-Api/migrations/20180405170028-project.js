'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('project', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      deviconpath: { type: Sequelize.STRING },
      name: { type: Sequelize.STRING, allowNull: false },
      description: { type: Sequelize.STRING },
      longdescription: { type: Sequelize.TEXT, allowNull: true },
      // start page of the project, containing documentation for instance
      startpage: { type: Sequelize.STRING, allowNull: false },
      // the url of the code repository project (mainly on git)
      repoUrl: { type: Sequelize.STRING, allowNull: false },
      // a link to the changelog of the project. Might not necessarily exist, hence not required
      releasenotesurl: { type: Sequelize.STRING, allowNull: true },
      // we won´t know it by the time of creation of the entry, therefore not required
      latestversion: { type: Sequelize.STRING },
      //if true the github page will be used for controlling the release notes
      usegitnativereleases: { type: Sequelize.BOOLEAN },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(r=>{queryInterface.addConstraint('Project', ['name'], {
      type: 'unique',
      name: 'uq_project_name'
    })})

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('project');
  }
};
