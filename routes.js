const controllers = require('./controllers');

const Router = require('express').Router;
const router = new Router();


router.get('/', (req, res) => {
  res.json({ message: 'Welcome to dev-notification API!' });
});

router.route('/project')
  .get((...args) => controllers.project.find(...args))
    .post((...args) => controllers.project.create(...args));

router.route('/project/:name')
    .put((...args) => controllers.project.update(...args))
    .get((...args) => controllers.project.findByName(...args))
    .delete((...args) => controllers.project.remove(...args));

router.route('/project/:name/releases')
    .get((...args) => controllers.project.releases(...args));
    


router.route('/user')
  .get((...args) => controllers.user.find(...args))
  .post((...args) => controllers.user.create(...args));

router.route('/user/:id')
  .put((...args) => controllers.user.update(...args))
  .get((...args) => controllers.user.findById(...args))
  .delete((...args) => controllers.user.remove(...args));


module.exports = router;
