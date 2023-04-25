const { gql } = require('apollo-server-express');;

const typeDefs = gql`
  type User {
    _id: ID
    name: String!
    userName: String
    email: String!
    password: String!
    location: String!
    age: String!
    gender: String!
    images: String
    bio: String
    dislikes: [Dislike]
    language: String
    want: String
    hobbies: String
  }


  type Like {
    id: ID!
    likedBy: User!
    likedUser: User!
    createdAt: String!
  }

  type Dislike {
    _id: ID
    dislikedUserId: ID
    dislikedName: String
  }


  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    dislikes(email: String!): [Dislike]
    likes: [Like!]!
    user(email: String!): User
    me: User
    userLikes(userId: ID!): [Like!]!
  }


  type Mutation {
    createUser(email: String!, password: String!, name: String!, age: String!, location: String!, gender: String!, images: String, bio: String!, language: String!, want: String!, hobbies: String!): Auth
    login(email: String!, password: String!): Auth
    addDislike(dislikedName: String!): Dislike
    updateUser(id: ID!, name: String, userName: String, email: String, password: String, location: String, age: Int, gender: String, images: [String!], bio: String): User
    removeUser(id: ID!): Boolean
  }
`;

module.exports = typeDefs;