import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { HeaderContainer, H1, H2 } from "./styles/Header.styled";
import { QUERY_USERS, QUERY_ME } from '../utils/queries';
import { User } from './User';
import ProfileComponent from './UserPage';

export default function Card() {
  // State for clicking on profile icon
  // State changes for the "true" and "false" buttons
  const [showProfilePage, setProfilePage] = useState(false);
  const [likeUser, setLikeUser] = useState([]);
  const [dislikedUser, setDislikedUser] = useState([]);

  // QUERY_ME defined here
  const { data: meData, loading: meLoading } = useQuery(QUERY_ME);
  const currentUser = meData?.me;


  // QUERY_USERS with conditionals based on your gender
  const { data: userData, loading: userLoading } = useQuery(QUERY_USERS, {
    variables: { gender: currentUser?.gender === 'Male' ? 'Female' : 'Male' },
  });

  // data for the QUERY_USERS
  const users = userData?.users || [];
  // console.log("initial users", users);

  function handleProfile() {
    setProfilePage(true);
  }

  if (showProfilePage) {
    return <ProfileComponent />;
  }

  if (meLoading || userLoading) {
    return <h1>Loading...</h1>;
  }

  // Filter the users array to only return opposite gender of the user
  // and filters out the IDs you have disliked/liked
const filteredUsers = users.filter(
    (user) => user.gender !== currentUser.gender && !dislikedUser.includes(user._id) && !likeUser.includes(user._id)
  );
  console.log("filtered users", filteredUsers);


  console.log("disliked users", [...dislikedUser]);
  // console.log("liked users", [...likeUser]);




  //generate random user from array and use the filterdUsers variable
  const randomUser = filteredUsers[Math.floor(Math.random() * filteredUsers.length)];

  // Remove randomUser id if disliked
  function handleDislike() {
    setDislikedUser([...dislikedUser, randomUser._id]);
  }
  // Add user to 
  function handleLike() {
    setLikeUser([...likeUser, randomUser._id]);
  }

  return (
    <>
      <HeaderContainer>
        <H2>Explore</H2>
      </HeaderContainer>
      {<User handleProfile={handleProfile} handleLike={handleLike} handleDislike={handleDislike} user={randomUser} />}
    </>
  );
}
