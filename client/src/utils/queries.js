import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
query users($gender: String!) {
  users(gender: $gender) {
    _id
    userName
    name
    userName
    email
    location
    age
    gender
    images
    bio
  }
}`

export const QUERY_ME = gql`
  query me {
    me {
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

export const QUERY_LIKES = gql`
  query likes {
    likes {
      id
      likedBy {
        _id
        userName
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
        userName
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


