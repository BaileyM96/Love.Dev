import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { LoaderContainer, StyledLoader } from './styles/Loader.styled';
import { HeaderContainer, H1, H2 } from "./styles/Header.styled";
import { QUERY_USERS, QUERY_ME } from '../utils/queries';
import { User } from './User';
import ProfileComponent from './UserPage';
import { ProfileIcon, Profile } from './styles/Profilephoto';
// Need to ask Alex how to import the burger icon 


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
    return (
      <LoaderContainer>
        <StyledLoader active />;
      </LoaderContainer>
    );
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
    setDislikedUser([...dislikedUser, randomUser._id,]);
  }
  // Add user to 
  function handleLike() {
    setLikeUser([...likeUser, randomUser._id]);
  }

  return (
    <>
      <HeaderContainer>
        <svg 
            id="a" xmlns="http://www.w3.org/2000/svg" width="146" height="27"  viewBox="0 0 400 74.35" ><g><path d="M48.8,5.04v62.49H31.67V5.04h17.12Z" fill="#fff"/><path d="M80.48,20.92c6.47,0,12.02,2.33,16.64,6.98s6.94,10.23,6.94,16.73-2.34,12.21-7.03,16.85-10.34,6.96-16.96,6.96-12.28-2.33-16.98-6.98-7.05-10.26-7.05-16.82,2.35-12.31,7.05-16.87,10.5-6.84,17.4-6.84Zm-.46,16.89c-1.83,0-3.39,.66-4.67,1.99s-1.92,2.95-1.92,4.88,.65,3.51,1.95,4.85,2.85,2.01,4.65,2.01,3.4-.67,4.69-2.01,1.95-2.96,1.95-4.85-.64-3.55-1.92-4.88-2.85-1.99-4.72-1.99Z" fill="#fff"/><path d="M145.48,21.88l-21.33,47.43-21.06-47.43h16.34l4.85,12.31,5.31-12.31h15.89Z" fill="#fff"/><path d="M192.18,47.47h-25.96c-.4-1.31-.6-2.52-.6-3.62,0-1.53,.27-3.02,.82-4.49h8.7c-.61-3.39-2.52-5.08-5.72-5.08-2.14,0-3.88,.91-5.22,2.72s-2.01,4.14-2.01,6.98,.65,5.36,1.95,7.19,3,2.75,5.1,2.75c1.71,0,3.36-.85,4.94-2.56l9.75,11.72c-4.55,3.57-9.6,5.36-15.15,5.36-6.78,0-12.47-2.27-17.08-6.82-4.61-4.55-6.91-10.18-6.91-16.89s2.33-12.33,6.98-16.94,10.37-6.91,17.14-6.91,12.18,2.25,16.69,6.75,6.75,10.05,6.75,16.64c0,.67-.06,1.74-.18,3.2Z" fill="#fff"/></g><g><path d="M255.98,5.04h17.12V43.08c0,6.99-1.83,12.68-5.49,17.08-2.11,2.53-4.78,4.55-8.03,6.04s-6.58,2.24-10,2.24c-6.81,0-12.54-2.29-17.21-6.87-4.67-4.58-7-10.19-7-16.85s2.32-12.01,6.96-16.71,10.13-7.05,16.48-7.05c1.01,0,2.53,.09,4.58,.27v18.86c-1.4-1.1-2.81-1.65-4.21-1.65-1.77,0-3.29,.65-4.56,1.95s-1.9,2.86-1.9,4.69,.66,3.29,1.97,4.56,2.88,1.9,4.72,1.9c4.39,0,6.59-3.04,6.59-9.11V5.04Z" fill="#fff"/><path d="M326.99,47.47h-25.96c-.4-1.31-.6-2.52-.6-3.62,0-1.53,.27-3.02,.82-4.49h8.7c-.61-3.39-2.52-5.08-5.72-5.08-2.14,0-3.88,.91-5.22,2.72s-2.01,4.14-2.01,6.98,.65,5.36,1.95,7.19,3,2.75,5.1,2.75c1.71,0,3.36-.85,4.94-2.56l9.75,11.72c-4.55,3.57-9.6,5.36-15.15,5.36-6.78,0-12.47-2.27-17.08-6.82s-6.91-10.18-6.91-16.89,2.33-12.33,6.98-16.94,10.37-6.91,17.14-6.91,12.18,2.25,16.69,6.75,6.75,10.05,6.75,16.64c0,.67-.06,1.74-.18,3.2Z" fill="#fff"/><path d="M368.37,21.88l-21.33,47.43-21.06-47.43h16.34l4.85,12.31,5.31-12.31h15.89Z" fill="#fff"/></g><path d="M208.79,47.56c2.99,0,5.56,1.08,7.71,3.25s3.23,4.75,3.23,7.74-1.07,5.53-3.2,7.62-4.72,3.14-7.74,3.14-5.73-1.01-7.76-3.04-3.04-4.62-3.04-7.76,1.05-5.64,3.16-7.76,4.65-3.18,7.65-3.18Z" fill="#fff"/><path d="M14.6,11.26V63.08h11.44v11.26H0V0H26.05V11.26H14.6Z" fill="#fff"/><path d="M385.4,63.08V11.26h-11.4V0h26V74.35h-26v-11.26h11.4Z" fill="#fff"/>
        </svg>
        <ProfileIcon></ProfileIcon>
      </HeaderContainer>
      {<User handleProfile={handleProfile} handleLike={handleLike} handleDislike={handleDislike} user={randomUser} />}
    </>
  );
}
