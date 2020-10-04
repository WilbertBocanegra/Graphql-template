const mongoose = require('mongoose');

const mongoConnect = () => new Promise((resolve, reject) => {
    mongoose.connect('mongodb://localhost/api', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        resolve('MongoDB is working');
    }).catch(err => {
        reject(err);
    })
});

module.exports = mongoConnect;