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
    /* @media screen and (max-width: 390px) {
        justify-content: center;
        align-items: center;
        height: 100vh;
    } */
`;
    


// export const InterestContainer = styled(Container)`

// `;

export const BigImageContainer = styled.div`
display: flex;
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
justify-content: flex-start;
padding: 25px 0 20px 15px;
`;

export const NameItems = styled.li`
font-size: 36px;
font-weight: bolder;
list-style: none;
color: white;
`;

export const NameItems2 = styled.li`
font-size: 22px;
font-weight: bold;
list-style: none;
color: white;
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

export const Form =styled.form`
display: flex;
justify-content: center;
flex-direction: column;
flex-wrap: wrap;
`;