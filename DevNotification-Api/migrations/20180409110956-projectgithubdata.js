module.exports = {
	up: (queryInterface, Sequelize) => {
		queryInterface.createTable('git_projectdata', {
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

			stars: {
				type: Sequelize.INTEGER
			},
			watchers: {
				type: Sequelize.INTEGER
			},
			contributors: {
				type: Sequelize.INTEGER
			},

			issueNumber: {
				type: Sequelize.INTEGER
			},

			lastcommit: {
				type: Sequelize.DATE
			},


			// foreign key usage
			project_id: {
				type: Sequelize.INTEGER,
				references: {
					model: 'project',
					key: 'id'
				}
			}
		});
	},

	down: (queryInterface, Sequelize) => queryInterface.dropTable('git_projectdata')
};
