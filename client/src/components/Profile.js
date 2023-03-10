import { useQuery } from '@apollo/client'
import { QUERY_ME } from "../utils/queries";
import { Me } from "./Me";

export default function ProfileComponent() {

    const { loading, data } = useQuery(QUERY_ME);
    const me = data?.me;
    console.log(me);

    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <>
        {<Me me={me}/>}
            {/* <BigImageContainer2>
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
                    <Button>Coding</Button>
                    <Button>Coding</Button>
                </ListedInterest>
            </InterestContainer> */}
        </>
    )
}