import styled from 'styled-components'


const Button = styled.button`
    color: #000000;
    background-color: #EB3E94;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
    border-style: none;
    font-size: 20px;
    text-align: center;
    font-weight: bolder;
    padding: .25em;
    border-radius: 10px;
    width: 320px;
    height: 44px;
    
    width: 10rem;
        @media screen and (max-width: 390px) {
        padding-top: 10px;
        width: 320px;
        height: 44px;
        font-weight: bolder;
        margin-top: 35px;
    }
    

    &:hover{
        color: #ffafcc;
        border: 2px solid #ffafcc;
        background-color: white;
    }
`;

export default Button;
