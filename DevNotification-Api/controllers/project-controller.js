const Controller = require('../utils/controller');
const ProjectModel = require('../models/project-model');

// HTTP layer, in this instance you can manage express request, response and next.
// In utils/controller you have the basic RESTful methods find, findOne, findById,
// create, update and remove. Because this class is extending from there, you got that solved.
// You can overwrite extended methods or create custom ones here.

class ProjectController extends Controller {

    async releases(req, res, next) {
        try {
            const doc = await this.model.releases(req.params.name, req.params.lower);
            if (!doc) {
                return res.status(404).end();
            }
            res.status(200).json(doc);
        } catch (err) {
            next(err);
        }
    }

    async releaseNotes(req, res, next) {
        try {
            const doc = await this.model.releaseNotes(req.params.name, req.params.lower);
            if (!doc) {
                return res.status(404).end();
            }
            res.status(200).json(doc);
        } catch (err) {
            next(err);
        }
    }

    async subscribed(req, res, next) {
        try {
            const doc = await this.model.subscribed(req.user);
            if (!doc) {
                return res.status(404).end();
            }
            res.status(200).json(doc);
        } catch (err) {
            next(err);
        }
    }


    // Example of overwriting update method using findOneAndUpdate from mongoose

    // update(req, res, next) {
    // 	this.model.findOneAndUpdate({ _id: req.params.id }, req.body)
    // 	.then(doc => {
    // 		if (!doc) res.status(404).send();
    // 		return res.status(200).json(doc);
    // 	})
    // 	.catch(err => next(err));
    // }

    // Example of a custom method. Remember that you can use this method
    // in a specific route in the router file

    // customMethod(req, res, next) {
    // 	this.model.geoNear([1,3], { maxDistance : 5, spherical : true })
    // 	.then(doc => {
    // 		if (!doc) res.status(404).send();
    // 		return res.status(200).json(doc);
    // 	})
    // 	.catch(err => next(err));
    // }
}

module.exports = new ProjectController(ProjectModel);
