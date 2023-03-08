import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
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

export const QUERY_ME = gql`
  query me {
    me {
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

export const QUERY_LIKES = gql`
  query likes {
    likes {
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


