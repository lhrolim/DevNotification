const controllers = require('./controllers');
require('express-jwt-permissions')();


const Router = require('express').Router;
const router = new Router();


router.get('/', (req, res) => {
    res.json({ message: 'Welcome to dev-notification API!' });
});

router.route('/project')
    .get((...args) => controllers.project.find(...args))
    // .post(guard.check('admin'),(...args) => controllers.project.create(...args));
    .post((...args) => controllers.project.create(...args));


router.route('/project/:id')
    .get((...args) => controllers.project.findById(...args))
    .put((...args) => controllers.project.update(...args))
    .delete((...args) => controllers.project.remove(...args));


router.route('/project/:name')
    .get((...args) => controllers.project.findById(...args));

router.route('/project/:name/releases')
    .get((...args) => controllers.project.releases(...args));

router.route('/project/:name/subscribed')
    .get((...args) => controllers.project.subscribed(...args));

router.route('/project/:name/releases/:lower')
    .get((...args) => controllers.project.releases(...args));

router.route('/project/:name/releases/:lower/notes')
    .get((...args) => controllers.project.releaseNotes(...args));


router.route('/user')
    .get((...args) => controllers.user.find(...args))
    .post((...args) => controllers.user.create(...args));

router.route('/user/:id')
    .put((...args) => controllers.user.update(...args))
    .get((...args) => controllers.user.findById(...args))
    .delete((...args) => controllers.user.remove(...args));


module.exports = router;
