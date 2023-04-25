import { Awesome, LanguageInfo } from "./styles/container.styled";
import { NameContainer } from './styles/container.styled';
import { ProfileImagesmall } from "./styles/Profilephoto";
import { LargeProfile, SelectButton, Img } from "./styles/Profilephoto";
import { BigImageContainer, NameItems, TrueFalseContainer, DiscoverCard } from "./styles/container.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import  { blank }  from '../images/blank-profile-picture-973460_1280.png';




export const User = ({user ,handleProfile, handleLike, handleDislike}) => {
    return  (<div style={{height: '100vh'}}>
    
            <BigImageContainer>
                <LargeProfile>
                    <ProfileImagesmall>
                    {user.images}
                    </ProfileImagesmall>
                </LargeProfile>

                <DiscoverCard>
                    <NameContainer>
                        <NameItems>
                            {user.name}, {user.age}
                        </NameItems>
                        <Awesome>
                            <FontAwesomeIcon icon={faCode}  />
                            <LanguageInfo>{user.language}</LanguageInfo>
                        </Awesome>
                        
                        <div style={{fontWeight: '600'}}>Im looking for: {user.want}</div>
                        <div style={{fontWeight: '600'}}>Hobbies:  {user.hobbies}</div>
                        <div style={{fontWeight: '600', overflow: 'hidden'}}>Bio: {user.bio}</div>
                    </NameContainer>
                </DiscoverCard>
            </BigImageContainer>

    
            <TrueFalseContainer>
                <SelectButton onClick={handleDislike}>False</SelectButton>
                <SelectButton onClick={handleLike}>True</SelectButton>
            </TrueFalseContainer>

        </div>)
    
};