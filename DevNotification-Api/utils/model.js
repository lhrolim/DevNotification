const Sequelize = require('sequelize');
const { Op } = Sequelize;

class Model {

    constructor(model) {
        this.model = model;
    }


    // TODO: find a better sulution
    // / for mocking purposes
    async doCreate(input) {
        const newSchemaModel = new this.SchemaModel(input);
        return newSchemaModel.saveAsync();
    }

    async create(input) {
        return this.model.create(input);
    }

    async countall() {
        return this.model.count();
    }

    async update(id, updatedModel, ignoreIdCheck = false) {

        if (Number.isInteger(id) && !ignoreIdCheck) {
            const entity = await this.findById(id);
            return entity.update(updatedModel);
        }

        const paths = this.model.attributes;
        const internalPk = Object.keys(paths)
            .find(p => (paths[p] && paths[p].internalpk));
        if (internalPk) {
            if (!Number.isInteger(id)) {
                const entity = await this.findOne({
                    where: {
                        [internalPk]: id
                    }
                });
                return entity.update(updatedModel);
            }
        }

        throw new Error({ name: 'InvalidIdError', id });

    }

    async find(query) {
        return this.model.findAll(query);
    }

    async findOne(query) {
        const result = await this.model.findOne(query);
        return result;
    }

    async findById(id, populate, ignoreIdCheck = false) {
        if (!id) {
            throw new Error('id is required');
        }

        if (Number.isInteger(id) && !ignoreIdCheck) {
            const entity = await this.model.findById(id);
            return entity;
        }

        const paths = this.model.attributes;
        const internalPk = Object.keys(paths)
            .find(p => (paths[p] && paths[p].internalpk));
        // locates the unique identifier from the given model
        if (internalPk) {
            if (!Number.isInteger(id)) {
                if (id.endsWith('%')) {
                    // use %25 to encode this on browser
                    return this.find({
                        where: {
                            [internalPk]: { [Op.like]: id }
                        }


                    });
                }
                return this.findOne({
                    where: {
                        [internalPk]: id
                    }
                });

            }
        }

        throw new Error({ name: 'InvalidIdError', id });

    }

    async remove(id) {

        if (!id) {
            throw new Error('id is required');
        }

        if (Number.isInteger(id)) {

            const r = await this.model.destroy({
                where: { id }
            });
            return r === 1;
        }
        const paths = this.model.attributes;
        const internalPk = Object.keys(paths)
            .find(p => (paths[p] && paths[p].internalpk));
        if (internalPk) {
            const r = await this.model.destroy({
                where: { [internalPk]: id }
            });
            return r === 1;
        }

        throw new Error({ name: 'InvalidIdError', id });

    }


}

module.exports = Model;
