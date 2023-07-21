import { useContext, useState } from "react";
import HeaderCSS from '../styles/Header.module.css';
import { RxHamburgerMenu } from "react-icons/rx"
import { NavLink, Link, useNavigate } from "react-router-dom"
import { PiBag } from "react-icons/pi";
import { BsReceipt } from "react-icons/bs"
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
            <NavLink to="/other" >OTHER</NavLink>
        </div>
    );
}

const Header = () => {
    const [toggleDropDown, setToggleDropDown] = useState(false);
    const {getTotalCartItems} = useContext(AppContext);
    const navigate = useNavigate();

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
                    {/* <BsReceipt id={HeaderCSS.order}/> */}
                    <div onClick={() => navigate('/cart')}>
                        <PiBag id={HeaderCSS.cart}/>
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