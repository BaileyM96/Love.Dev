import { BigImageContainer2 } from "./styles/container.styled";
import { LargeProfile, ProfileImagesmall } from "./styles/Profilephoto";
import { NameContainer, NameItems, NameItems2, InterestContainer, ListedInterest } from "./styles/container.styled";
import Button from "./styles/pinkButton.styled";

export default function ProfileComponent() {
    return (
        <>
            <BigImageContainer2>
               <LargeProfile>
                    <ProfileImagesmall></ProfileImagesmall>
                </LargeProfile> 
            </BigImageContainer2>

            <NameContainer>
                <NameItems>First, Last</NameItems>
                <NameItems2>Javascript</NameItems2>
            </NameContainer>

            <InterestContainer>
                <ListedInterest>
                    <Button>Gaming</Button>
                    <Button>Photography</Button>
                    <Button>Coding</Button>
                </ListedInterest>
            </InterestContainer>
        </>
    )
}