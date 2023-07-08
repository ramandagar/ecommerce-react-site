import { useState, useContext, useEffect } from "react";
import Header from "../../components/Header";
import CartCSS from "../../styles/Cart.module.css";
import CartItem from "./CartItem";
import { AppContext } from "../../context/AppContext";
import { loadProducts } from "../../services/api";

const Cart = () => {
    const roundTwoDecimals = (num) => {
        return Math.round(num * 100) / 100;
    }

    const {cartItems, getTotalCartAmount, getTotalCartItems} = useContext(AppContext);
    const [products, setProducts] = useState([]);
    const subtotal = getTotalCartAmount();
    const shipping = subtotal === 0 ? 0 : 5;
    const tax = subtotal * 0.09;
    const total = subtotal + shipping + tax;

    useEffect(() => {
        loadProducts("")
            .then(data => setProducts(data))
    }, [loadProducts]);

    return (
        <>
            <Header />
            <main>
                <h2 style={{marginBottom: "10px"}}>{getTotalCartItems()} Items</h2>
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
                        <h3 style={{marginTop: "0"}}>Order Summary</h3>
                        <p>Subtotal: ${roundTwoDecimals(subtotal)}</p>
                        <p>Shipping: ${shipping}</p>
                        <p>Tax: ${roundTwoDecimals(tax)}</p>
                        <hr/>
                        <p>Total: ${roundTwoDecimals(total)}</p>
                        <button>Checkout</button>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Cart;