const { Client } = require('pg');
const config = require('../config/configPostgres')

const client = new Client(config);

const postgresConnect = () => new Promise((resolve, reject) => {
    client.connect().then(() => {
        resolve('Postgres is working');
    }).catch(err => {
        reject(err);
    });
});

module.exports = postgresConnect;