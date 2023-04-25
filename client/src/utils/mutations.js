import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;


export const CREATE_USER = gql`
  mutation createUser($name: String!, $email: String!, $password: String!, $location: String!, $age: String!, $gender: String!, $images: String, $bio: String!, $language: String!, $want: String!, $hobbies: String!) {
    createUser (name: $name, email: $email, password: $password, location: $location, age: $age, gender: $gender, images: $images, bio: $bio, language: $language, want: $want, hobbies: $hobbies) {
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
        password
        language
        want
        hobbies
      }
    }
  }
`;

export const UPDATE_USER = gql`
mutation updateUser($id: ID!, $name: String, $email: String, $password: String, $location: String, $age: Number, $gender: String, $images: String, $bio: String) {
  updateUser(id: $id, name: $name, username: $username, email: $email, password: $password, location: $location, age: $age, gender: $gender, images: $images, bio: $bio) {
    _id
    name
    userName
    email
    location
    age
    gender
    images
    bio
  }
}
`;

// Allow user to dislike users profiles
export const ADD_DISLIKE = gql`
mutation addDislike($dislikedName: String!) {
  addDislike(dislikedName: $dislikedName) {
    _id
    dislikedName
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
        userName
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
        userName
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



