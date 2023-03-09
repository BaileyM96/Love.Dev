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
    

    const { data } = useQuery(QUERY_USERS, {
        variables:{ gender: 'Female' },
    });

    const users = data?.users;
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

    const randomUser = 
        // return users[Math.floor(Math.random() * users.length )]; 
         JSON.parse('{"name":"Flem","email":"fdumberrillo@biblegateway.com","password":"dVqqVcDaA3nr","location":"Hoogeveen","age":23,"gender":"Male","images":"http://dummyimage.com/167x100.png/5fa2dd/ffffff","bio":"Maecenas tristique, ac consequat metus sapien ut nunc."}')


    console.log(randomUser);

    
    return (
        <>
        <HeaderContainer>
            <h1>Explore</h1>
        </HeaderContainer>
        {<User handleProfile={handleProfile} handleLike={handleLike} user={randomUser}/>}
        {/* {users && users.map(user=>(<User handleProfile={handleProfile} handleLike={handleLike} user={user}/>))} */}

        {/* <CardContainer>
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
        </TrueFalseContainer> */}
        </>
    );
}