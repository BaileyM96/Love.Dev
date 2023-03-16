import { Bio, CardContainer } from "./styles/container.styled";
import { NameContainer } from './styles/container.styled';
import { ProfileImagesmall } from "./styles/Profilephoto";
import { Profile, LargeProfile, SelectButton } from "./styles/Profilephoto";
import { BigImageContainer, NameItems, NameItems2, InterestContainer, ListedInterest, TrueFalseContainer } from "./styles/container.styled";
import { HeaderContainer, H1, H2 } from "./styles/Header.styled";



export const User = ({user ,handleProfile, handleLike}) => {
    return  (<div>
            
            <CardContainer>
                <Profile onClick={handleProfile}>
                    <ProfileImagesmall></ProfileImagesmall>
                </Profile>
            </CardContainer>
    

    
            <BigImageContainer>
                <LargeProfile>
                    <ProfileImagesmall>
                    </ProfileImagesmall>
                </LargeProfile>
            </BigImageContainer>
    
        
            <NameContainer>
                <NameItems>
                    {/* {user.name} */}
                </NameItems>
                <NameItems2>
                    
                </NameItems2>
            </NameContainer>
    
            <HeaderContainer>
                <H2>Bio</H2>
            </HeaderContainer>
            
            <InterestContainer>
                <Bio>
                    
                </Bio>                   
                
            </InterestContainer>
    
            <TrueFalseContainer>
                <SelectButton onClick={handleLike}>False</SelectButton>
                <SelectButton onClick={handleLike}>True</SelectButton>
            </TrueFalseContainer>

        </div>)
    
};