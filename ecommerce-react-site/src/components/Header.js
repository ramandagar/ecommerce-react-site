import { useState } from "react";
import HeaderCSS from './Header.module.css'
import { RxHamburgerMenu } from "react-icons/rx"
import { NavLink, Link } from "react-router-dom"
import { PiBagLight } from "react-icons/pi";

const DropDown = ({toggle}) => {
    if (!toggle) {
        return null;
    }
    return (
        <div className={HeaderCSS.dropDown}>
            <NavLink to="/new" >NEW</NavLink>
            <NavLink to="/men" >MEN</NavLink>
            <NavLink to="/women" >WOMEN</NavLink>
            <NavLink to="/kids" >KIDS</NavLink>
        </div>
    );
}

const Header = () => {
    let [toggleDropDown, setToggleDropDown] = useState(false);
    return (
        <header className={HeaderCSS.header}>
            <div>
                <NavLink to="/" style={{textDecoration: 'none', color: 'black'}}><h1 className={HeaderCSS.title}>NAME</h1></NavLink>
                <nav>
                    <NavLink to="/new" >NEW</NavLink>
                    <NavLink to="/men" >MEN</NavLink>
                    <NavLink to="/women" >WOMEN</NavLink>
                    <NavLink to="/kids" >KIDS</NavLink>
                </nav>
                <div className={HeaderCSS.icons}>
                    <RxHamburgerMenu className={HeaderCSS.menu} onClick={() => setToggleDropDown(!toggleDropDown)}/>
                    <Link to="/cart" style={{display: "flex"}}><PiBagLight className={HeaderCSS.cart}/></Link>

                    <DropDown toggle={toggleDropDown}/>
                </div>
            </div>
        </header>
    );
}

export default Header;