import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation userLogin($email: String!, $password: String!) {
    userLogin(email: $email, password: $password) {
      token
      user {
        _id
        name
        email
        location
        age
        gender
        images
        bio
      }
    }
  }
`;


export const CREATE_USER = gql`
  mutation createUser($input: UserInput!) {
    createUser(input: $input) {
      _id
      name
      email
      location
      age
      gender
      images
      bio
    }
  }
`;

export const UPDATE_USER = gql`
mutation updateUser($id: ID!, $name: String, $email: String, $password: String, $location: String, $age: String, $gender: String, $images: [String!], $bio: String) {
  updateUser(id: $id, name: $name, email: $email, password: $password, location: $location, age: $age, gender: $gender, images: $images, bio: $bio) {
    _id
    name
    email
    location
    age
    gender
    images
    bio
  }
}
`;

export const CREATE_LIKE = gql`
  mutation createLike($likedUserId: ID!) {
    createLike(likedUserId: $likedUserId) {
      id
      likedBy {
        _id
        name
        email
        location
        age
        gender
        images
        bio
      }
      likedUser {
        _id
        name
        email
        location
        age
        gender
        images
        bio
      }
      createdAt
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($userId: ID!) {
    deleteUser(userId: $userId) {
      message
    }
  }
`;


