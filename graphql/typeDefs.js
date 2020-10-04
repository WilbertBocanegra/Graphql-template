const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Query {
    User: [User]
  }


  type User {
    _id:ID,
    name:String,
    lastName:String,
    email:String,
    password:String,
  }

  type Mutation{
    createUser(input: UserInput):Int
  }

  input UserInput{
    name:String,
    lastName:String,
    email:String,
    password:String,
  }

  type Subscription{
    newUser:User
  }
`;

module.exports = typeDefs;