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


