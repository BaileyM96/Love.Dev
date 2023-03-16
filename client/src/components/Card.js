import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { CardContainer } from "./styles/container.styled";
import { NameContainer } from './styles/container.styled';
import { ProfileImagesmall } from "./styles/Profilephoto";
import { Profile, LargeProfile, SelectButton } from "./styles/Profilephoto";
import { BigImageContainer, NameItems, NameItems2, InterestContainer, ListedInterest, TrueFalseContainer } from "./styles/container.styled";
import Button from "./styles/pinkButton.styled";
import { HeaderContainer, H1, H2 } from "./styles/Header.styled";
import Profiled from "./UserPage";
import { QUERY_USERS, QUERY_ME } from '../utils/queries';
import { User } from './User';
import ProfileComponent from './UserPage';



export default function Card() {

    // State changes for the "true" and "false" buttons 
    const [showProfilePage, setProfilePage] = useState(false);
    const [likeUser, setLikeUser] = useState(0);

    // QUERY_ME defined here
    const { data: meData, loading: meLoading } = useQuery(QUERY_ME);
    const currentUser = meData?.me;

    console.log(currentUser)
   

    // QUERY_USERS && QUERY_ME goes here
    const { data, loading } = useQuery(QUERY_USERS, {
        variables: {gender: currentUser?.gender === 'Male' ? 'Female' : 'Male'}
    });

    // Getting theata for the QUERY_USERS 
    const users = data?.users || [];
    // console.log(users)
   

    function handleProfile() {
        setProfilePage(true);
    };

    if (showProfilePage) {
        return <ProfileComponent />;
    };
    // Handles the buttons to like and dislike
    function handleLike() {
        setLikeUser(likeUser + 1);
        console.log('click');
    };

    if (meLoading || loading) {
        return <h1>Loading...</h1>;
    };
    // console.log(data)

  

    // conditon for...
    //Giving certain genders based on users gender/prefrence
    //Need to define QUERY_ME so I can use it here
    // if (currentUser === 'Male') {
    //     return users === 'Female';
    // }

    // if (currentUser === 'Female') {
    //     return users === 'Male';
    // };
     

    


    
    const filteredUsers = users.filter(user => user.gender !== currentUser.gender);
    

    //generate random user from array
    const randomUser = filteredUsers[Math.floor(Math.random() * filteredUsers.length)];
console.log(randomUser)
  



    return (
        <>
            <HeaderContainer>
                <H2>Explore</H2>
            </HeaderContainer>
            {<User handleProfile={handleProfile} handleLike={handleLike} user={randomUser} />}
        </>
    );
}
