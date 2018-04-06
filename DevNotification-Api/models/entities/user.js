// userId: { type: String, required: true, index: { unique: true, internalpk: true } },
// email: { type: String, required: true, index: { unique: true } },
// creationDate: { type: Date, required: true },


// projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
// applications: [{ type: Schema.Types.ObjectId, ref: 'Applications' }]


module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('User', {
        userid: { type: DataTypes.STRING, allowNull: false, internalpk: true },
        email: { type: DataTypes.STRING, allowNull: false }
    }, { freezeTableName: true });

    User.associate = function (models) {
        User.belongsToMany(models.Project, {
            through: 'userproject', as: 'links', foreignKey: 'user_id', otherKey: 'project_id'
        });
        User.belongsToMany(models.Application, {
            through: 'userapplication', as: 'apps', foreignKey: 'user_id', otherey: 'application_id'
        });

    };

    return User;
};
