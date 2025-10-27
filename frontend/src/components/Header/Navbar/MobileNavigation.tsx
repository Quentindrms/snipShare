import './navigation.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import NavLinks from './NavLinks';

export function MobileNavigation(){

    const burgerIcon = <GiHamburgerMenu className='burgerMenuIcon' size="35px" color="white" onClick={() => setShowBurger(!showBurger)} />
    const [showBurger, setShowBurger] = useState(false);

    return(
        <>
            {burgerIcon}
            <nav className="navigation-menu-mobile">
                {showBurger && <NavLinks />}
            </nav>
        </>
    )
}