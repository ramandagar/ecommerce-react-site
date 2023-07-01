import { Link } from "react-router-dom";
import Header from "./Header";
import DetailsCSS from "./DetailsCSS.module.css"

const Details = ({img, name, price, rating}) => {
    return (
        <>
            <Header />
            <main>
                <div className={DetailsCSS.nav}>
                    <Link to='/home'>Page</Link>
                    <p>/</p>
                    <p>Details</p>
                </div>
                <div className={DetailsCSS.product}>
                    <img src="" alt="product image"/>
                    <div className={DetailsCSS.description}>
                        <p>Name</p>
                        <p>Price</p>
                        <p>Rating</p>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Details;