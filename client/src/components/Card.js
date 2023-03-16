import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { CardContainer } from "./styles/container.styled";
import { NameContainer } from './styles/container.styled';
import { ProfileImagesmall } from "./styles/Profilephoto";
import { Profile, LargeProfile, SelectButton } from "./styles/Profilephoto";
import { BigImageContainer, NameItems, NameItems2, InterestContainer, ListedInterest, TrueFalseContainer } from "./styles/container.styled";
import Button from "./styles/pinkButton.styled";
import { HeaderContainer, H1, H2 } from "./styles/Header.styled";
import Profiled from "../components/Profile";
import { QUERY_USERS, QUERY_ME } from '../utils/queries';
import { User } from './User';
import ProfileComponent from '../components/Profile';



export default function Card() {

    // State variables 
    const [showProfilePage, setProfilePage] = useState(false);
    const [likeUser, setLikeUser] = useState(0);
    const { data, loading } = useQuery(QUERY_USERS, {
        
    });

    // Data of users array
    const users = data?.users || [];
   

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

    if (loading) {
        return <h1>Loading...</h1>;
    };

  

    // conditon for...
    //Giving certain genders based on users gender/prefrence
    //Need to define QUERY_ME so I can use it here
    if (users === 'Male') {
        return 'Female';
    }

    if (users === 'Female') {
        return 'Male';
    };
     

    


    

    

    //generate random user from array
    const randomUser = users[Math.floor(Math.random() * users.length)];

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
