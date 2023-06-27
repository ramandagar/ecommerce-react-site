import HeaderCSS from './Header.module.css'
import { BiSolidCart } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi"

const Header = () => {
    return (
        <header>
            <h1 className={HeaderCSS.title}>Name</h1>
            <nav>
                <ul>
                    <li>New</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                </ul>
            </nav>
            <div className={HeaderCSS.icons}>
                <GiHamburgerMenu className={HeaderCSS.menu}/>
                <BiSolidCart />
            </div>
        </header>
    );
}

export default Header;