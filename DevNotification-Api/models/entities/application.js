module.exports = (sequelize, DataTypes) => {

    const Application = sequelize.define('Application', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        name: { type: DataTypes.STRING, allowNull: false, internalpk:true },
        url: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING }
    }, { freezeTableName: true });

    Application.associate = function (models) {
        Application.belongsToMany(models.Project, { through: models.ApplicationProject, as: 'projects' });
    };


    return Application;
};
