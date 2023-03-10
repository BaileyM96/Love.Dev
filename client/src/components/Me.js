import { BigImageContainer2 } from "./styles/container.styled";
import { LargeProfile, ProfileImagesmall } from "./styles/Profilephoto";
import { NameContainer, NameItems, NameItems2, InterestContainer, ListedInterest } from "./styles/container.styled";
import Button from "./styles/pinkButton.styled";


export const Me = ({me}) => {
    return (<div>
            <BigImageContainer2>
               <LargeProfile>
                    <ProfileImagesmall></ProfileImagesmall>
                </LargeProfile> 
            </BigImageContainer2>

            <NameContainer>
                <NameItems>First, Last</NameItems>
                <h2>{me.name}</h2>
                <NameItems2>Javascript</NameItems2>
            </NameContainer>

            <InterestContainer>
                <ListedInterest>
                    <Button>Gaming</Button>
                    <Button>Photography</Button>
                    <Button>Coding</Button>
                    <Button>Coding</Button>
                    <Button>Coding</Button>
                </ListedInterest>
            </InterestContainer>
    </div>)
};