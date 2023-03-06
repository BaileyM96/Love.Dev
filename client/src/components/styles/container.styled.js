import styled from 'styled-components';

export const Container = styled.section`
display: flex;
flex-wrap: wrap;
flex-direction: column;
text-align: center;
justify-content: space-between;
align-items: center;
@media screen and (max-width: 390px) {
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
`;

export const LandingContainer = styled(Container)`
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-evenly;
`;
    


export const InterestContainer = styled(Container)


