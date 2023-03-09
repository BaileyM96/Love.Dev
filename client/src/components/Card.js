import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { CardContainer, NameContainer } from "./styles/container.styled";
import { ProfileImagesmall } from "./styles/Profilephoto";
import { Profile, LargeProfile, SelectButton } from "./styles/Profilephoto";
import { BigImageContainer, NameItems, NameItems2, InterestContainer, ListedInterest, TrueFalseContainer } from "./styles/container.styled";
import Button from "./styles/pinkButton.styled";
import { HeaderContainer, H1, H2 } from "./styles/Header.styled";
import Profiled from "../components/Profile";
import { QUERY_USERS } from '../utils/queries';

// Added comment
export default function Card() {

    // State variables 
    const [showProfilePage, setProfilePage] = useState(false);
    const [likeUser, setLikeUser] = useState(0);
    

    const { data } = useQuery(QUERY_USERS, {
        variables:{ gender: 'Female' },
    });

    const users = data?.users;
    console.log(users)


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

    


    return (
        <>
        <HeaderContainer>
            <H2>Explore</H2>
        </HeaderContainer>
        
        {users && users.map(user=>(<div><h4>{user.name}</h4></div>))}

        <CardContainer>
            <Profile onClick={handleProfile}>
                <ProfileImagesmall></ProfileImagesmall>
            </Profile>
        </CardContainer>

        <BigImageContainer>
            <LargeProfile>
                <ProfileImagesmall></ProfileImagesmall>
            </LargeProfile>
        </BigImageContainer>

        <NameContainer>
            <NameItems></NameItems>
            <NameItems2>JavaScript</NameItems2>
        </NameContainer>

        <HeaderContainer>
            <H1>Interests</H1>
        </HeaderContainer>
        
        <InterestContainer>
            <ListedInterest>
                <Button>Hiking</Button>
                <Button>Hiking</Button>                
                <Button>Hiking</Button>                
                <Button>Hiking</Button>                               
            </ListedInterest>
        </InterestContainer>

        <TrueFalseContainer>
            <SelectButton onClick={handleLike}>False</SelectButton>
            <SelectButton onClick={handleLike}>True</SelectButton>
        </TrueFalseContainer>
        </>
    );
}