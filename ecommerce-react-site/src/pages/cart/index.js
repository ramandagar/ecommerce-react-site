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
                        <div>
                            <p>Subtotal:</p>
                            <p>${roundTwoDecimals(subtotal)}</p>
                        </div>
                        <div>
                            <p>Shipping:</p>
                            <p>${shipping}</p>
                        </div>
                        <div>
                            <p>Tax:</p>
                            <p>${roundTwoDecimals(tax)}</p>
                        </div>
                        <div>
                            <p>Total:</p>
                            <p>${roundTwoDecimals(total)}</p>
                        </div>
                        <button>Checkout</button>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Cart;