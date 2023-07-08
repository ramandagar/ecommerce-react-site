import { useState, useContext, useEffect } from "react";
import Header from "../components/Header";
import CartCSS from "../styles/Cart.module.css";
import { AppContext } from "../context/AppContext";
import { loadProducts } from "../services/api";

const CartItem = ({product}) => {
    const {removeFromCart, addToCart, cartItems, updateCartAmount} = useContext(AppContext);

    return (
        <div className={CartCSS.item}>
            <img src={product.image} alt={product.title}/>
            <div className={CartCSS.text}>
                <p>{product.title}</p>
                <p>${product.price}</p>
                <div>
                    <button onClick={() => removeFromCart(product.id)}>-</button>
                    <input value={cartItems[product.id]} onChange={(event) => updateCartAmount(product.id, event.target.value)}/>
                    <button onClick={() => addToCart(product.id)}>+</button>
                </div>
            </div>
        </div>
    );
}

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