import { Link } from "react-router-dom";
import FooterCSS from "../styles/Footer.module.css"
import { AiFillGithub } from "react-icons/ai"

const Footer = () => {
    return (
        <footer>
            <div>
                <h5>Benjamin Pham &copy; 2023</h5>
                <a href="https://github.com/BenPham14" target="_blank"><AiFillGithub /></a>
            </div>
        </footer>
    );
}

export default Footer;