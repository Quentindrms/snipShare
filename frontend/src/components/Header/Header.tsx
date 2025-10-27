import './header.css';
import { DesktopNavigation } from "./Navbar/DesktopNavigation";
import { MobileNavigation } from './Navbar/MobileNavigation';

export function Header() {

    return (
        <>
            <header>
                <h1 className="brand-name"><a href="/" className='brand-name-link'>SnipShare</a></h1>
                <DesktopNavigation />
                <MobileNavigation />
            </header>
        </>)
}

export default Header;