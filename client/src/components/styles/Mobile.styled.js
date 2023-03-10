import styled from "styled-components";

export const MobileContainer = styled.div`
display: flex;
flex-direction: row;
height: 50%;
width: 100%;
position: fixed;
background-color: #4361EE;
z-index: 999;
`;

export const NavList = styled.ul`
display: flex;
justify-content: space-around;
flex-direction: column;
list-style: none;
padding: 5px;
margin: 5px;
color: white;
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

export const BurgerButton = styled.button`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  background-color: black;
  border: none;
  cursor: pointer;
  z-index: 1000;

  & span {
    display: block;
    width: 25px;
    height: 2px;
    margin-bottom: 5px;
    position: relative;
    background: #000;
    border-radius: 3px;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }

  ${({ open }) =>
    open &&
    `
    span:nth-child(1) {
        transform: rotate(45deg) translate(5px, -5px);
    }
    span:nth-child(2) {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
    }
    span:nth-child(3) {
        transform: rotate(-45deg) translate(5px, 5px);
    }
  `}
`;