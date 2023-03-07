const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String!
    email: String!
    password: String!
    location: String!
    age: Int!
    gender: String!
    images: [String!]
    bio: String
}

type Like {
  id: ID!
  likedBy: User!
  likedUser: User!
  createdAt: String!
}

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(email: String!): User
    me: User
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!, location: String!, age: String!, gender: String!, images: String!, bio: String!): Auth
    login(email: String!, password: String!): Auth
    updateUser(id: ID!, name: String, email: String, password: String, location: String, age: String, gender: String, images: [String!], bio: String): User
    removeUser(id: ID!): Boolean
  }
`;

module.exports = typeDefs;