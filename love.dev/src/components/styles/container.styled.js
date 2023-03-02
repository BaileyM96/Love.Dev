import styled from 'styled-components';

export const Container = styled.section`
display: flex;
justify-content: space-between;
align-items: center;
`;

export const LandingContainer = styled(Container)`
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-evenly;
`;

