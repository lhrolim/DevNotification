const Promise = require('bluebird');
const promisify = require('promisify-node');

module.exports = {
    bluebird: modules => {
        modules.forEach(module => {
            Promise.promisifyAll(require(module)); // eslint-disable-line global-require

        });
    },
    node: modules => {
        modules.forEach(module => {
            promisify(require(module)); // eslint-disable-line global-require
        });
    }
};
