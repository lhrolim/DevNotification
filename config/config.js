const milieu = require('milieu');

const config = milieu('dev-notification', {
  environment: 'dev',
  server: {
    port: 8070
  },
  mongo: {
    url: 'mongodb://localhost/dev-notification'
  }
});


module.exports = config;
