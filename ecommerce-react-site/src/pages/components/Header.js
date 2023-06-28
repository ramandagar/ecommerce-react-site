import { useState } from "react";
import HeaderCSS from './Header.module.css'
import { BiSolidCart } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi"

const DropDown = ({toggle}) => {
    if (!toggle) {
        return null;
    }
    return (
        <div className={HeaderCSS.dropDown}>
            <ul>
                <li>New</li>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
            </ul>
        </div>
    );
}

const Header = () => {
    let [toggleDropDown, setToggleDropDown] = useState(false);
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
                <GiHamburgerMenu className={HeaderCSS.menu} onClick={() => setToggleDropDown(!toggleDropDown)}/>
                <BiSolidCart className={HeaderCSS.cart}/>

                <DropDown toggle={toggleDropDown}/>
            </div>
        </header>
    );
}

export default Header;