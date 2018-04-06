module.exports = (sequelize, DataTypes) => {

    const Organization = sequelize.define('Organization', {

        name: { type: DataTypes.STRING, allowNull: false },
        url: { type: DataTypes.STRING }


    }, { freezeTableName: true });


    Organization.associate = function (models) {
        // Application.belongsToMany(User, { through: 'UserApplication', });
    };


    return Organization;
};
