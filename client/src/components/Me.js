import { BigImageContainer2 } from "./styles/container.styled";
import { LargeProfile, ProfileImagesmall } from "./styles/Profilephoto";
import { NameContainer, NameItems, NameItems2, InterestContainer, ListedInterest } from "./styles/container.styled";
import Button from "./styles/pinkButton.styled";
import Auth from '../utils/auth';
import decode from 'jwt-decode';
import { QUERY_ME } from "../utils/queries";
import { useQuery } from '@apollo/client';

export const Me = () => {
    const userToken = Auth.getToken();
    const userData = decode(userToken);
    const userName = userData.data._id;
    console.log(userName);
    const { data, loading } = useQuery(QUERY_ME, {
        variables: {_id: userName}
    })
    if (loading) {
        return <h1>Loading...</h1>;
    }
    const users = data?.me || "not working";

    console.log(users)
    console.log(userData);
    console.log(userName);
    return (<div>
            <BigImageContainer2>
               <LargeProfile>
                    <ProfileImagesmall></ProfileImagesmall>
                </LargeProfile> 
            </BigImageContainer2>

            <NameContainer>
                <NameItems>First, Last</NameItems>
                <h2>name</h2>
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