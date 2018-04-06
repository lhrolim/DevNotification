// JWTs
const jwt = require('express-jwt');
const cors = require('cors');
const config = require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes');
const promisyFy = require('./utils/promisify-all');
// TODO: check https://github.com/expressjs/errorhandler
require('./utils/stringutils');
const bluebird = require('bluebird');
const auth0Key = 'oj8DLWEqvubHefqgIkeqJS30pfsTjQWpTCyheR6hIt0KWjRjjPG5wP02IkDLq6yu';


class AppStart {

    static init(useauth) {


        const { port } = config.server;
        const app = express();

        promisyFy.bluebird(['mongoose', 'request', 'request-promise']);

        // mongoose.connect(config.mongo.url);

        mongoose.Promise = bluebird;

        app.use(helmet());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        app.use(cors());
        app.use(morgan('tiny'));


        const authenticate = jwt({
            secret: Buffer.from(auth0Key, 'base64'),
            audience: 'oFMSf9OHqjAWRzj5uHym4Ew8MC0MuAho'
        }).unless({ path: ['/'] });

        if (useauth) {
            app.use(authenticate);
        }
        app.use('/api/', routes);


        // catch 404 and forward to error handler
      /*   app.use((req, res, next) => {
            const err = new Error('Not Found');
            err.status = 404;
            next(err);
        });

        // error handler
        // no stacktraces leaked to user unless in development environment
        app.use((err, req, res, next) => {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: (app.get('env') === 'development') ? err : {}
            });
        }); */

        // app.use(mongooseErrorHandler);
        app.listen(port, () => { console.log(`App started on port ${port}`); });

    }

}
module.exports = AppStart.init;
