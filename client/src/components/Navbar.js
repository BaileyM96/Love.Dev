import React, { useState } from 'react';
import { MobileContainer, NavList, NavLinks, Titles, BurgerButton } from "./styles/Mobile.styled";
import { useLocation } from 'react-router-dom';



export default function Navbar() {

    const [open, setOpen] = useState(false);

    const handleMenu = () => {
        setOpen(!open);

    };

    const location = useLocation();

    const showNavbar = location.pathname === '/Discover' || location.pathname === '/me';



    return (
     
        <>
        <BurgerButton onClick={handleMenu} open={open}>

        </BurgerButton>
        <MobileContainer open={open}>
        
        <BurgerButton onClick={handleMenu} open={open}>

        </BurgerButton>
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