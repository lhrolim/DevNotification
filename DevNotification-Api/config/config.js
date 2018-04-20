const milieu = require('milieu');

const config = milieu('dev-notification', {
  environment: 'dev',
  server: {
    port: 8070
  },
  mongo: {
    url: 'mongodb://localhost/dev-notification'
  },


  development: {
    dialect: 'postgres',
    username: 'dn',
    password: 'dn',
    database: 'dn',
    host: 'localhost',
    operatorsAliases: false
  },
  test: {
    dialect: 'sqlite',
    storage: ':memory:'
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: 'mysql'
  }


});


module.exports = config;
