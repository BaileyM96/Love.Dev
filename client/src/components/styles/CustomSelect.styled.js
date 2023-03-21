import styled from "styled-components";

export const Select = styled.select`
padding: 0.5rem;
border: none;
border-radius: 0.25rem;
background-color: #fff;
color: #333;

&:focus {
    outline: none;
    box-shadow: 0 0 0 2px #ccc;
  }
`;

export const Option = styled.option`
  /* Your option styles here */
  padding: 0.5rem;
  background-color: #fff;
  color: #333;
`;