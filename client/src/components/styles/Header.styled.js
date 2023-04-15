import styled from 'styled-components';

export const H2 = styled.div`
   color: #212121

`;

export const HeaderContainer = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
margin: 60px 0 35px 80px;
`;

export const ProfileHeader = styled.header`
display: flex;
justify-content: center;
margin: 60px 0 35px;

`;

export const H1 = styled(H2)`
    font-size: 32px;
`;

export const Text = styled.p`
color: #FFFFFF;
font-size: 18px;
font-weight: bold;
`;

export const Text1 = styled(Text)`
padding: 5px 30px;
font-size: 14px;
font-weight: lighter;
`;

export const Span = styled.span`
color: #ffffff;
text-decoration: underline;
`;