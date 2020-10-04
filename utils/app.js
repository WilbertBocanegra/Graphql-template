const mongoConnect = require('./mongoConnect');
const schema = require('./schema')
const postgresConnect = require('./postgresConnect');

module.exports = {
    mongoConnect,
    schema,
    postgresConnect
}