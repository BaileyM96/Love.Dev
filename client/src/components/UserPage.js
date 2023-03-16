import { useQuery } from '@apollo/client';
import { QUERY_ME } from "../utils/queries";
import Auth from '../utils/auth';
import { Bio, CardContainer } from "./styles/container.styled";
import { NameContainer } from './styles/container.styled';
import { ProfileImagesmall } from "./styles/Profilephoto";
import { Profile, LargeProfile } from "./styles/Profilephoto";
import { BigImageContainer, NameItems, NameItems2, InterestContainer, ListedInterest, TrueFalseContainer } from "./styles/container.styled";
import { HeaderContainer, H2 } from "./styles/Header.styled";

export default function UserPage() {
  const { data, loading } = useQuery(QUERY_ME);
  const me = data?.me;
  const loggedIn = Auth.loggedIn();

  if (loading) {
    return <h1>Loading...</h1>;
  };

  return (
    <>
      {loggedIn && (
        <>

          <HeaderContainer>
                <H2>Profile</H2>
          </HeaderContainer>


          <CardContainer>
            <Profile>
              <ProfileImagesmall />
            </Profile>
          </CardContainer>

          <BigImageContainer>
            <LargeProfile>
              <ProfileImagesmall />
            </LargeProfile>
          </BigImageContainer>

          <NameContainer>
            <NameItems>
              {me.name}, {me.age}
            </NameItems>
            <NameItems2>
              {me.location}, {me.gender}
            </NameItems2>
          </NameContainer>

          <HeaderContainer>
            <H2>Bio</H2>
          </HeaderContainer>

          <InterestContainer>
            <Bio>{me.bio}</Bio>
          </InterestContainer>
        </>
      )}

      {!loggedIn && <p>Please log in to view your profile.</p>}
    </>
  );
};


