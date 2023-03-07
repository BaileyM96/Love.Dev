import { gql } from '@apollo/client';

export const USER_LOGIN = gql`
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

