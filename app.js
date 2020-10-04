const express = require('express');
const { ApolloServer, PubSub, gql } = require('apollo-server');
const { mongoConnect, schema, postgresConnect } = require('./utils/app');

const app = express();
const port = 3000;

mongoConnect().then(success => {
    console.log(success);
}).catch(error => {
    console.log(error);
});

postgresConnect().then(success => {
    console.log(success);
}).catch(err => {
    console.log(err);
});

const pubsub = new PubSub();
const server = new ApolloServer({ schema: schema });
//server.applyMiddleware({app})

/*
app.listen(port, (url) => {
    console.log(`🚀 Server ready at ${port}`);
});*/

server.listen(port).then(({ url }) => console.log(`server started at ${url}`));

