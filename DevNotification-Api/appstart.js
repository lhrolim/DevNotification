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
const mongooseErrorHandler = require('./utils/mongooseErrorHandler');
require('./utils/stringutils');
const bluebird = require('bluebird');
const auth0Key = 'oj8DLWEqvubHefqgIkeqJS30pfsTjQWpTCyheR6hIt0KWjRjjPG5wP02IkDLq6yu';

class AppStart {

    init(useauth) {


        const port = config.server.port;
        const app = express();

        promisyFy.bluebird(['mongoose', 'request', 'request-promise']);

        mongoose.connect(config.mongo.url);

        mongoose.Promise = bluebird;

        app.use(helmet());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        app.use(cors());
        app.use(morgan('tiny'));


        const authenticate = jwt({
            secret: new Buffer(auth0Key, 'base64'),
            audience: 'oFMSf9OHqjAWRzj5uHym4Ew8MC0MuAho'
        }).unless({ path: ['/'] });

        if (useauth) {
            app.use(authenticate);
        }

        app.use('/api/', routes);
        app.use(mongooseErrorHandler);

        app.listen(port, () => { console.log(`App started on port ${port}`); });

    }

}
module.exports = new AppStart().init;
