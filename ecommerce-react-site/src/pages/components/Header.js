import { useState } from "react";
import HeaderCSS from './Header.module.css'
import { BiSolidCart } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi"
import { Link } from "react-router-dom"

const DropDown = ({toggle}) => {
    if (!toggle) {
        return null;
    }
    return (
        <div className={HeaderCSS.dropDown}>
            <ul>
                <Link to="/new" style={{textDecoration: 'none'}}><li>NEW</li></Link>
                <Link to="/men" style={{textDecoration: 'none'}}><li>MEN</li></Link>
                <Link to="/women" style={{textDecoration: 'none'}}><li>WOMEN</li></Link>
                <Link to="/kids" style={{textDecoration: 'none'}}><li>KIDS</li></Link>
            </ul>
        </div>
    );
}

const Header = () => {
    let [toggleDropDown, setToggleDropDown] = useState(false);
    return (
        <header>
            <Link to="/" style={{textDecoration: 'none', color: 'black'}}><h1 className={HeaderCSS.title}>NAME</h1></Link>
            <nav>
                <ul>
                    <Link to="/new" style={{textDecoration: 'none'}}><li>NEW</li></Link>
                    <Link to="/men" style={{textDecoration: 'none'}}><li>MEN</li></Link>
                    <Link to="/women" style={{textDecoration: 'none'}}><li>WOMEN</li></Link>
                    <Link to="/kids" style={{textDecoration: 'none'}}><li>KIDS</li></Link>
                </ul>
            </nav>
            <div className={HeaderCSS.icons}>
                <GiHamburgerMenu className={HeaderCSS.menu} onClick={() => setToggleDropDown(!toggleDropDown)}/>
                <Link to="/cart" style={{display: "flex"}}><BiSolidCart className={HeaderCSS.cart}/></Link>

                <DropDown toggle={toggleDropDown}/>
            </div>
        </header>
    );
}

export default Header;