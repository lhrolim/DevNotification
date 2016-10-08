const Model = require('../utils/model');
const q = require("bluebird");
const ProjectSchema = require('../schemas/project-schema');
const githubService = require("../services/github-service.js");


// Business Model layer, in this instance you can manage your business logic. For example,
// if you want to create a pet before creating a person, because you'll end up adding that
// pet to the person, this is the place.

// In libraries/model you have the basic support for RESTful methods. Because this class
// is extending from there, you got that solved.
// You can overwrite extended methods or create custom ones here. Also you can support
// more mongoose functionality like skip, sort etc.

class ProjectModel extends Model {

    findByName(name) {
        return this.findOne({ 'name': name });
    }

    releases(name) {
        return this.findByName(name)
            .then(project => {
                if (!project) {
                    Promise.reject();
                }

                return githubService.listReleases(project.repourl);

            });
    }

    update(id, updatedModel) {
        return super.update(id, updatedModel);
    }


    create(project) {

        return super.create(project).then(p => {
            return githubService.listReleases(project.repourl).then(rels => {
                if (!rels) {
                    return Promise.resolve();
                }
                p.latestversion = rels[0];
                return this.update(p.id, p);
            });
        });
    }

}

module.exports = new ProjectModel(ProjectSchema);
