module.exports = (sequelize, DataTypes) => {

    const ApplicationProject = sequelize.define('ApplicationProject', {
        version: { type: DataTypes.STRING, allowNull: false }
    }, { freezeTableName: true, tableName: 'application_project' });

    return ApplicationProject;

};
