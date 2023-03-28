import { Bio, CardContainer } from "./styles/container.styled";
import { NameContainer } from './styles/container.styled';
import { ProfileImagesmall } from "./styles/Profilephoto";
import { Profile, LargeProfile, SelectButton, Img } from "./styles/Profilephoto";
import { BigImageContainer, NameItems, NameItems2, InterestContainer, ListedInterest, TrueFalseContainer } from "./styles/container.styled";
import { HeaderContainer, H1, H2 } from "./styles/Header.styled";
import  blank  from '../images/blank-profile-picture-973460_1280.png';




export const User = ({user ,handleProfile, handleLike, handleDislike}) => {
    return  (<div>
            
            <CardContainer>
                <Profile onClick={handleProfile}>
                    <ProfileImagesmall>
                        <Img src={blank} />
                    </ProfileImagesmall>
                </Profile>
            </CardContainer>
    

    
            <BigImageContainer>
                <LargeProfile>
                    <ProfileImagesmall>
                    <Img  src={blank} />
                    </ProfileImagesmall>
                </LargeProfile>
            </BigImageContainer>
    
        
            <NameContainer>
                <NameItems>
                    {user.name}, {user.age}
                </NameItems>
                <NameItems2>
                    {user.location}, {user.gender}
                </NameItems2>
            </NameContainer>
    
            <HeaderContainer>
                <H2>Bio</H2>
            </HeaderContainer>
            
            <InterestContainer>
                <Bio>
                    {user.bio}
                </Bio>                   
                
            </InterestContainer>
    
            <TrueFalseContainer>
                <SelectButton onClick={handleDislike}>False</SelectButton>
                <SelectButton onClick={handleLike}>True</SelectButton>
            </TrueFalseContainer>

        </div>)
    
};