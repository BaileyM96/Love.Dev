import styled from "styled-components";

export const Profile = styled.div`
border-radius: 50%;
overflow: hidden;
width: 50px;
height: 50px;
`;

export const ProfileImagesmall = styled.div`
width: 100%;
object-fit: contain;
align-items: center;
display: flex;
justify-content: center;
/* background-color: #F2F3F5; */
`;

export const LargeProfile = styled(Profile)`
width: 300px;
height: 300px;
`;

export const SelectButton = styled.button`
border-radius: 50%;
width: 80px;
height: 80px;
background-color: #4CC9F0;
color: black;
font-size: larger;
font-weight: bolder;
`;

export const Img = styled.img`
width: 100%;
align-items: center;
`;