import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
query users {
  users {
    _id
    name
    age
    gender
    images
    bio
    location
    language
    want
    hobbies
  }

}`

// TODO Create a way for the dislikes to refrence the user that was disliked
export const QUERY_ME = gql`
  query me {
    me {
      _id
      age
      gender
      images
      name
      bio
      location
      language
      want
      hobbies
      dislikes {
        _id
        dislikedUserId
        dislikedName
      }
    }
  }
`;

export const QUERY_DISLIKES = gql`
query dislikes {
  dislikes {
    id
    dislikerUser {
      id
      name
      email
      location
      age
      gender
    }
    dislikedUser {
      id
      name
      email
      location
      age
      gender
    }
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




//Added in new data set for the hobbies and prefered language
export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $username) {
      _id
      name
      userName
      email
      location
      age
      gender
      images
      bio
      language
      want
      hobbies
      dislikes {
        dislikedUserId
        dislikedName
      }
    }
  }
`;


