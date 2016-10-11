const config = require('./config/config');

const express  = require('express');
const mongoose = require('mongoose');

const helmet     = require('helmet');
const bodyParser = require('body-parser');
const morgan     = require('morgan');

const routes = require('./routes');

const port = config.server.port;
const app  = express();

require('./utils/promisify-all')['bluebird'](['mongoose','request','request-promise']);

const mongooseErrorHandler = require('./utils/mongooseErrorHandler');

require('./utils/stringutils');

mongoose.connect(config.mongo.url);

mongoose.Promise = require('bluebird');

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use('/', routes);
app.use(mongooseErrorHandler);

app.listen(port, () => { console.log(`App started on port ${port}`); });

module.exports = app;
