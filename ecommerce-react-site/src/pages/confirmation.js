import { useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import { loadProducts } from "../services/api";
import { AppContext } from "../context/AppContext";
import ConfirmationCSS from "../styles/Confirmation.module.css"
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Confirmation = () => {
    const [products, setProducts] = useState([]);
    const {clearCart, finalOrder} = useContext(AppContext);
    const navigate = useNavigate();

    useEffect (() => {
        loadProducts("")
            .then(data => setProducts(data))
            .finally(clearCart())
    },[loadProducts])

    return (
        <>
            <Header />
            <main className={ConfirmationCSS.main}>
                <h1>Thank you!</h1>
                <p>Your order is confirmed. You'll receive a confirmation email with your order shortly.</p>
                <div className={ConfirmationCSS.items}>
                    {
                        products.map((product) => {
                            if (finalOrder[product.id][0] !== 0) {
                                return (
                                    <div key={product.id} className={ConfirmationCSS.item}>
                                        <img src={product.image} alt="Product"/>
                                        <div>
                                            <p>{product.title}</p>
                                            <p>${product.price}</p>
                                            <div>
                                                {
                                                    finalOrder[product.id][1] &&
                                                    <p>Size: {finalOrder[product.id][1]}</p>
                                                }
                                                <p>Qty: {finalOrder[product.id][0]}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                    <button onClick={() => navigate('/')}>CONTINUE SHOPPING</button>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Confirmation;