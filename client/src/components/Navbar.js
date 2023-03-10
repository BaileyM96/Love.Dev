import { MobileContainer, NavList, NavLinks, Titles } from "./styles/Mobile.styled";

export default function Navbar() {
    return (
        <>
        <MobileContainer>
            <NavList>
                <NavLinks>
                    <Titles>Matches</Titles>
                </NavLinks>
                <NavLinks>
                    <Titles>Explore</Titles>
                </NavLinks>
                <NavLinks>
                    <Titles>Profile</Titles>
                </NavLinks>
            </NavList>
        </MobileContainer>
        </>
    );
}