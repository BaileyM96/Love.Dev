import styled from "styled-components";

export const MobileContainer = styled.div`
display: flex;
flex-direction: column;
height: 100%;
width: 100%;
position: fixed;
background-color: #fff;
z-index: 999;
`;

export const NavList = styled.ul`
display: flex;
flex-direction: column;
list-style: none;
padding: 0;
margin: 0;
`;

export const NavLinks = styled.li`
text-align: center;
`;

export const Titles = styled.a`
text-decoration: none;
font-size: 18px;
&:hover {
    color: black;
}
`;