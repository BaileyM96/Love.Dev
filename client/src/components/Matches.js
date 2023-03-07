import { LittleCardContainer, LittleCards, NameItems2, NameItems3 } from "./styles/container.styled";
import { HeaderContainer, H1 } from "./styles/Header.styled";
import  Bailey  from '../images/Bailey Portrait.jpg'

export default function matches() {
    return (
        <>
        <HeaderContainer>
            <H1>Matches</H1>
        </HeaderContainer>

        <LittleCardContainer>
           <LittleCards>
                <img src={Bailey}  />
                <NameItems3>Bailey Mejia</NameItems3>
            </LittleCards>

            <LittleCards>
               <img src={Bailey} /> 
            </LittleCards> 
        </LittleCardContainer>
        </>
    );
}