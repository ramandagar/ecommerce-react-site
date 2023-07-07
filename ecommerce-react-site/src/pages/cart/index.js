import { useState, useContext, useEffect } from "react";
import Header from "../../components/Header";
import CartCSS from "../../styles/Cart.module.css";
import CartItem from "./CartItem";
import { AppContext } from "../../context/AppContext";
import { loadProducts } from "../../services/api";

const Cart = () => {
    const {cartItems} = useContext(AppContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts("")
            .then(data => setProducts(data))
    }, [loadProducts]);

    return (
        <>
            <Header />
            <main>
                <h2>1 Items</h2>
                <div className={CartCSS.info}>
                    <div className={CartCSS.items}>
                        {
                            products.map((product) => {
                                if (cartItems[product.id] !== 0) {
                                    return <CartItem product={product}/>
                                }
                            })
                        }
                    </div>
                    <div className={CartCSS.summary}>
                        <h3>Order Summary</h3>
                        <p>Subtotal: $1</p>
                        <p>Shipping: $1</p>
                        <p>Tax: $1</p>
                        <button>Checkout</button>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Cart;