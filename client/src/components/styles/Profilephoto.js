import styled from "styled-components";


export const Profile = styled.div`
border-radius: 10px 10px 0 0;
overflow: hidden;
width: 50px;
height: 50px;
`;

export const ProfileImagesmall = styled.div`
/* width: 100%; */
object-fit: contain;
align-items: center;
display: flex;
background-color: #F2F3F5;
`;

//Css for the profile icon to view your profile
export const ProfileIcon = styled.button`
width: 47px;
height: 47px;
border-radius: 100%;
border-color: #4CC9F0;
object-fit: contain;
overflow: hidden;
background-color: #F2F3F5;
`;

export const LargeProfile = styled(Profile)`
width: 320px;
height: 320px;
`;

//Viewing your actual profile page
export const LargeProfile2 = styled(LargeProfile)`
border-radius: 10px;
border-style: solid;
border-color: #4CC9F0;
border-width: 5px;
`;
//The container that holds your photos
export const MePhotoContainer = styled.div`
display: flex;
justify-content: center;
`;

//Your photos
export const MePhotos = styled.img`
width: 64px;
height: 59px;
border-radius: 10px;
border-color: #4CC9F0;
border-style: solid;
background-color: white;
margin: 10px 10px 10px 0;
`;

// True and false buttons
export const SelectButton = styled.button`
border-radius: 50%;
width: 103px;
height: 103px;
background-color: #F5F6F7;
color: black;
font-size: 16px;
font-weight: 600;
`;

//sizing for images
export const Img = styled.img`
width: 100%;
align-items: center;
`;