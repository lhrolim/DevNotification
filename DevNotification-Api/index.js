// JWTs
var jwt = require('express-jwt');
const cors = require('cors');

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

//TODO: check https://github.com/expressjs/errorhandler
const mongooseErrorHandler = require('./utils/mongooseErrorHandler');

require('./utils/stringutils');

mongoose.connect(config.mongo.url);

mongoose.Promise = require('bluebird');

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('tiny'));


var authenticate = jwt({
  secret: new Buffer("oj8DLWEqvubHefqgIkeqJS30pfsTjQWpTCyheR6hIt0KWjRjjPG5wP02IkDLq6yu", 'base64'),
  audience: "oFMSf9OHqjAWRzj5uHym4Ew8MC0MuAho"
});


app.use(authenticate);




app.use('/', routes);
app.use(mongooseErrorHandler);

app.listen(port, () => { console.log(`App started on port ${port}`); });

module.exports = app;
