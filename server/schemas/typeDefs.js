const { gql } = require('apollo-server-express');;

const typeDefs = gql`
  type User {
    _id: ID
    name: String!
    userName: String
    email: String!
    password: String!
    location: String!
    age: Int!
    gender: String!
    images: String!
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
    users: [User]!
    likes: [Like!]!
    user(email: String!): User
    me: User
    userLikes(userId: ID!): [Like!]!
  }

  input CreateUserInput {
    name: String!
    userName: String
    email: String!
    password: String!
    location: String!
    age: Int!
    gender: String!
    images: String!
    bio: String
  }

  input CreateLikeInput {
    likedUserId: ID!
  }

  type Mutation {
    createUser(input: CreateUserInput!): Auth
    login(email: String!, password: String!): Auth
    updateUser(id: ID!, name: String, userName: String, email: String, password: String, location: String, age: Int, gender: String, images: [String!], bio: String): User
    removeUser(id: ID!): Boolean
    createLike(input: CreateLikeInput!): Like!
  }
`;

module.exports = typeDefs;