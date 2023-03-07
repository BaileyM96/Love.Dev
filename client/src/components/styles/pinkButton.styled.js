import styled from 'styled-components'
// ffafcc
const Button = styled.button`
    color: #ffffff;
    background-color: #3A0CA3;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
    border-style: none;
    font-size: 1em;
    margin: 1em;
    padding: .25em;
    border-radius: 10px;
    
    width: 10rem;
        @media screen and (max-width: 390px) {
        padding-top: 10px;
    }
    

    &:hover{
        color: #ffafcc;
        border: 2px solid #ffafcc;
        background-color: white;
    }
`;

export default Button;

// comment comment comment