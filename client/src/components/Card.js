import React, { useState } from 'react';
import { CardContainer, NameContainer } from "./styles/container.styled";
import { ProfileImagesmall } from "./styles/Profilephoto";
import { Profile, LargeProfile, SelectButton } from "./styles/Profilephoto";
import { BigImageContainer, NameItems, NameItems2, InterestContainer, ListedInterest, TrueFalseContainer } from "./styles/container.styled";
import Button from "./styles/pinkButton.styled";
import { HeaderContainer, H1, H2 } from "./styles/Header.styled";
import Profiled from "../components/Profile";

export default function Card() {

    const [showProfilePage, setProfilePage] = useState(false);

    function handleProfile() {
        setProfilePage(true);
    };

    if (showProfilePage) {
        return <Profiled />;
    };


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
                <ProfileImagesmall></ProfileImagesmall>
            </LargeProfile>
        </BigImageContainer>

        <NameContainer>
           <NameItems>First, Last</NameItems>
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
            <SelectButton></SelectButton>
            <SelectButton></SelectButton>
        </TrueFalseContainer>
        </>
    );
}