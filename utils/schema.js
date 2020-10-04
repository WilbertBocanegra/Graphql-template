const { makeExecutableSchema } = require('apollo-server-express');

const resolvers = require('../graphql/resolvers');
const typeDefs = require('../graphql/typeDefs')

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

module.exports = schema