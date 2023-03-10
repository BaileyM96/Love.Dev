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
import { QUERY_USERS } from '../utils/queries';
import { User } from './User';

// Added comment
export default function Card() {

    // State variables 
    const [showProfilePage, setProfilePage] = useState(false);
    const [likeUser, setLikeUser] = useState(0);
    const { data, loading } = useQuery(QUERY_USERS, {
        variables: { gender: 'Female' },
    });

    // Data of users array
    const users = data?.users || []
    console.log(users);

    function handleProfile() {
        setProfilePage(true);
    };

    if (showProfilePage) {
        return <Profiled />;
    };

    function handleLike() {
        setLikeUser(likeUser + 1);
        console.log('click');
    };

    if (loading) {
        return <h1>Loading...</h1>;
    }

    //generate random user from array
    const randomUser = users[Math.floor(Math.random() * users.length)];

    console.log(randomUser);

    return (
        <>
            <HeaderContainer>
                <H2>Explore</H2>
            </HeaderContainer>
            {<User handleProfile={handleProfile} handleLike={handleLike} user={randomUser} />}
        </>
    );
}
