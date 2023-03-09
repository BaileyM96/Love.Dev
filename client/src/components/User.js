import { CardContainer } from "./styles/container.styled";
import { NameContainer } from './styles/container.styled';
import { ProfileImagesmall } from "./styles/Profilephoto";
import { Profile, LargeProfile, SelectButton } from "./styles/Profilephoto";
import { BigImageContainer, NameItems, NameItems2, InterestContainer, ListedInterest, TrueFalseContainer } from "./styles/container.styled";
import Button from "./styles/pinkButton.styled";
import { HeaderContainer, H1, H2 } from "./styles/Header.styled";
import Profiled from "../components/Profile";

export const User = ({user ,handleProfile, handleLike}) => {
    return  (<div>
            
            <CardContainer>
                <Profile onClick={handleProfile}>
                    <ProfileImagesmall></ProfileImagesmall>
                </Profile>
            </CardContainer>
    
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
                <h2 key={user._id}>{user.name}</h2>
                <NameItems2></NameItems2>
                <h3>{user.location}</h3>
            </NameContainer>
    
            <HeaderContainer>
                <h2>Bio</h2>
            </HeaderContainer>
            
            <InterestContainer>
                <ListedInterest>
                      <p>{user.bio}</p>                   
                </ListedInterest>
            </InterestContainer>
    
            <TrueFalseContainer>
                <SelectButton onClick={handleLike}>False</SelectButton>
                <SelectButton onClick={handleLike}>True</SelectButton>
            </TrueFalseContainer>

        </div>)
    
};