import { useContext, useState } from "react";
import HeaderCSS from '../styles/Header.module.css';
import { RxHamburgerMenu } from "react-icons/rx"
import { NavLink, Link } from "react-router-dom"
import { PiBag } from "react-icons/pi";
import { AppContext } from "../context/AppContext";

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
    const [toggleDropDown, setToggleDropDown] = useState(false);
    const {getTotalCartItems} = useContext(AppContext);

    return (
        <header className={HeaderCSS.header}>
            <div>
                <Link to="/" style={{textDecoration: 'none', color: 'black'}}>
                    <h1>STUFF</h1>
                </Link>
                <nav>
                    <NavLink to="/new" >NEW</NavLink>
                    <NavLink to="/men" >MEN</NavLink>
                    <NavLink to="/women" >WOMEN</NavLink>
                    <NavLink to="/other" >OTHER</NavLink>
                </nav>
                <div className={HeaderCSS.icons}>
                    <RxHamburgerMenu id={HeaderCSS.menu} onClick={() => setToggleDropDown(!toggleDropDown)}/>
                    <div>
                        <Link to="/cart" style={{display: "flex"}}><PiBag id={HeaderCSS.cart}/></Link>
                        {
                            getTotalCartItems() !== 0 && <p id={HeaderCSS.count}>{getTotalCartItems()}</p>
                        }
                    </div>

                    <DropDown toggle={toggleDropDown}/>
                </div>
            </div>
        </header>
    );
}

export default Header;