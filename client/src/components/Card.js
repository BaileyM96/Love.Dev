import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { CardContainer, NameContainer } from "./styles/container.styled";
import { ProfileImagesmall } from "./styles/Profilephoto";
import { Profile, LargeProfile, SelectButton } from "./styles/Profilephoto";
import { BigImageContainer, NameItems, NameItems2, InterestContainer, ListedInterest, TrueFalseContainer } from "./styles/container.styled";
import Button from "./styles/pinkButton.styled";
import { HeaderContainer, H1, H2 } from "./styles/Header.styled";
import Profiled from "../components/Profile";
import { QUERY_USER } from '../utils/queries';


export default function Card({ name }) {

    // State variables 
    const [showProfilePage, setProfilePage] = useState(false);
    const [likeUser, setLikeUser] = useState(0);
    const { data } = useQuery(QUERY_USER, {
        variables: {name}
    })

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

    let user = QUERY_USER[likeUser];

    return (
        <>
        <HeaderContainer>
            <H2>Explore</H2>
        </HeaderContainer>

        <CardContainer>
            <Profile onClick={handleProfile}>
                <ProfileImagesmall></ProfileImagesmall>
            </Profile>
        </CardContainer>

        <BigImageContainer>
            <LargeProfile>
                <ProfileImagesmall>{user.images}</ProfileImagesmall>
            </LargeProfile>
        </BigImageContainer>

        <NameContainer>
           <NameItems>{user.name}</NameItems>
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