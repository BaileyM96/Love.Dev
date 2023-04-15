import styled from 'styled-components';

export const Container = styled.section`
display: flex;
flex-wrap: wrap;
flex-direction: column;
text-align: center;
justify-content: space-evenly;
align-items: center;
height: 100vh;
    
    @media screen and (max-width: 390px) {
        justify-content: center;
        align-items: center;
    }
`;

export const CardContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-end;
padding: 30px;
`;
export const LandingContainer = styled(Container)`
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-evenly;
        @media screen and (max-width: 390px) {
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
`;

export const LoginContainer = styled.header`
    display: flex;
    flex-direction: column;
    background-color: #333333;
        @media screen and (max-width: 390px) {
          
            justify-content: flex-start;
            align-items: center;
            padding-top: 15%;
        }
`;

export const InputContainer = styled.div`
display: flex;
padding-top: 35px;
align-items: start;
flex-direction: column;
justify-content: flex-start;
height: 100vh;
`;

export const DiscoverCard = styled.div`
display: flex;
border-radius: 0px 0px 10px 10px;
width: 320px;
height: 272px;
background-color: #F5F6F7;
`;


export const DiscoverCard2 = styled(DiscoverCard)`
border-radius: 10px;
`;

export const BigImageContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const MatchesImage = styled.img`
object-fit: contain;
`;

export const BigImageContainer2 = styled.div`
display: flex;
justify-content: center;
padding-top: 35px;
`

export const NameContainer = styled.div`
display: flex;
flex-direction: column;
font-size: 16px;
flex-direction: column;
justify-content: space-between;
padding: 25px 0 20px 15px;
`;

// Need to know what font size is the name compared to age
export const NameItems = styled.li`
display: flex;
font-size: 18px;
font-weight: bolder;
list-style: none;
color: #212121;
`;

// Need to know the font size for the language
export const NameItems2 = styled.li`
font-size: 16px;
font-weight: 500;
list-style: none;
color: #212121
`;

//Font awesome container 
export const Awesome = styled.div`
display: flex;
align-items: center;
color: #F72585;
`;

export const NameItems3 = styled(NameItems2)`
display: flex;
flex-direction: column;
color: white;
font-size: 26px;
padding-left: 5px;
`;

export const InterestContainer = styled.div`
display: flex;
justify-content: center;
`;

export const ListedInterest = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: center;
/* width: 50%; */
`;

export const TrueFalseContainer = styled.section`
display: flex;
justify-content: space-evenly;
padding: 25px 0 20px;
`;

export const LittleCardContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
padding-top: 40px;
height: 100vh;
`;

export const LittleCards = styled.div`
display: flex;
flex-direction: column;
width: 300px;
height: 500px;
text-align: center;
border-radius: 10px;
/* background-color: white; */

img {
    object-fit: contain;
    border-radius: 10px;
    width: 100%;
}
`;

export const Form = styled.form`
display: flex;
justify-content: center;
flex-direction: column;
flex-wrap: wrap;
`;

export const Bio = styled.p`
font-size: 18px;

`;

