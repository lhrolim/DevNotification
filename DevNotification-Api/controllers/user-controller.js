const Controller = require('../utils/controller');
const UserModel = require('../models/user-model');

// HTTP layer, in this instance you can manage express request, response and next.
// In libraries/controller you have the basic RESTful methods find, findOne, findById,
// create, update and remove. Because this class is extending from there, you got that solved.
// You can overwrite extended methods or create custom ones here.

class UserController extends Controller {

	// Example of overwriting update method using findOneAndUpdate from mongoose

	update(req, res, next) {
		this.model.findById(req.params.id, null, true)
			.then(res => {
				if (!res) {
					this.create(req, res, next);
				} else {
					this.update(req, res, next);
				}
			}).catch(err => next(err));
	}

}

module.exports = new UserController(UserModel);
