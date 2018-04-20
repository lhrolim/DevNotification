// name: { type: String, required: true, index: { unique: true, internalpk: true } },

// deviconpath: String,

// description: { type: String },

// longdescription: { type:String },

// // start page of the project
// startpage: { type: String, required: true },
// // the url of the code repository project (mainly on git)
// repourl: { type: String, required: true },
// // a link to the changelog of the project. Might not necessarily exist, hence not required
// releasenotesurl: { type: String },
// // we won´t know it by the time of creation of the entry, therefore not required
// latestversion: { type: String },

// usegitnativereleases: Boolean

module.exports = (sequelize, DataTypes) => {

    const Project = sequelize.define('Project', {

        name: { type: DataTypes.STRING, allowNull: false, internalpk: true },
        deviconpath: { type: DataTypes.STRING },
        description: { type: DataTypes.STRING },
        longdescription: { type: DataTypes.TEXT },
        // start page of the project, containing documentation for instance
        startpage: { type: DataTypes.STRING, allowNull: false },
        // the url of the code repository project (mainly on git)
        repourl: { type: DataTypes.STRING, allowNull: false },
        // a link to the changelog of the project. Might not necessarily exist, hence not required
        releasenotesurl: { type: DataTypes.STRING, allowNull: true },
        // we won´t know it by the time of creation of the entry, therefore not required
        latestversion: { type: DataTypes.STRING },
        // if true the github page will be used for controlling the release notes
        usegitnativereleases: { type: DataTypes.BOOLEAN }

    }, { freezeTableName: true });

    Project.associate = function (models) {
        Project.belongsToMany(models.User, {
            through: 'userproject', as: 'links', foreignKey: 'project_id', otherKey: 'user_id'
        });
        Project.hasOne(models.ProjectGithubData, { as: 'githubdata' });
    };

    return Project;
};
