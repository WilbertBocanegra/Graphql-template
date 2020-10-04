const { makeExecutableSchema } = require('apollo-server');

const resolvers = require('../graphql/resolvers');
const typeDefs = require('../graphql/typeDefs')

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

module.exports = schema
