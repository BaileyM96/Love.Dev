import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #F72585;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;
  
  @media (max-width: 390px) {
    width: 100%;
  }

  li {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #4361EE;
    text-decoration: none;
    transition: color 0.3s linear;
    list-style: none;
    @media (max-width: 390px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #7209B7;
    }
  }

  
`;