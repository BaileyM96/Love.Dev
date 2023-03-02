import styled from 'styled-components'
// ffafcc
const Button = styled.button`
    color: whitesmoke;
    background-color: #ffafcc;
    border-style: none;
    font-size: 1em;
    margin: 1em;
    padding: .25em;
    border-radius: 10px;
    width: 10rem;
    

    &:hover{
        color: #ffafcc;
        border: 2px solid #ffafcc;
        background-color: white;
    }
`;

export default Button;