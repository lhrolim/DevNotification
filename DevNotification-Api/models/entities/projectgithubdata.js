module.exports = (sequelize, DataTypes) => {

    const ProjectGithubData = sequelize.define('ProjectGithubData', {

        stars: {
            type: DataTypes.INTEGER
        },
        watchers: {
            type: DataTypes.INTEGER
        },
        contributors: {
            type: DataTypes.INTEGER
        },

        issueNumber: {
            type: DataTypes.INTEGER
        },

        lastcommit: {
            type: DataTypes.DATE
        }

    }, { tableName: 'github_projectdata' });

    ProjectGithubData.associate = function (models) {
        ProjectGithubData.belongsTo(models.Project, {
            as: 'githubdata', foreignKey: 'project_id'
        });
    };

    return ProjectGithubData;
};
