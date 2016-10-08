



class Model {




    constructor(mongooseData) {
        this.SchemaModel = mongooseData.model;
        this.Schema = mongooseData.schema;
    }

    isObjectId(id) {
        return require('mongoose').Types.ObjectId.isValid(id);
    }


    create(input) {
        const newSchemaModel = new this.SchemaModel(input);
        return newSchemaModel.saveAsync();
    }

    update(id, updatedModel) {
        
        if (this.isObjectId(id)) {
            return this.SchemaModel
                .findByIdAndUpdate(id, updatedModel, { new: true })
                .execAsync();
        }

        const paths = this.Schema.paths;
        const internalPk = Object.keys(paths).find(p => (paths[p]._index != null && paths[p]._index.internalpk));
        if (!!internalPk) {
            const type = paths.name.instance;
            if ((type === "String" && isNaN(id)) || (type === "Number" && !isNaN(id))) {
                return this.SchemaModel
                    .findOneAndUpdate({ [internalPk]: id }, updatedModel, { new: true })
                    .execAsync();
            }
        }

        throw { name: "InvalidIdError", id: id };

    }

    find(query) {
        return this.SchemaModel
            .find(query)
            .execAsync();
    }

    findOne(query, populate) {
        return this.SchemaModel
            .findOne(query)
            .populate(populate || '')
            .execAsync();
    }

    findById(id, populate) {

        if (this.isObjectId(id)) {
            return this.SchemaModel
                .findById(id)
                .populate(populate || '')
                .execAsync();
        }

        const paths = this.Schema.paths;
        const internalPk = Object.keys(paths).find(p => (paths[p]._index != null && paths[p]._index.internalpk));
        if (!!internalPk) {
            const type = paths.name.instance;
            if ((type === "String" && isNaN(id)) || (type === "Number" && !isNaN(id))) {
                return this.findOne({ [internalPk]: id });
            }
        }

        throw { name: "InvalidIdError", id: id };

    }

    remove(id) {

        if (this.isObjectId(id)) {
            return this.SchemaModel
                .findByIdAndRemove(id)
                .execAsync();;
        }

        const paths = this.Schema.paths;
        const internalPk = Object.keys(paths).find(p => (paths[p]._index != null && paths[p]._index.internalpk));
        if (!!internalPk) {
            const type = paths.name.instance;
            if ((type === "String" && isNaN(id)) || (type === "Number" && !isNaN(id))) {
                return this.SchemaModel
                    .findOneAndRemove({ [internalPk]: id })
                    .execAsync();    
            }
        }
        
        throw { name: "InvalidIdError", id: id };

    }

  
}

module.exports = Model;
