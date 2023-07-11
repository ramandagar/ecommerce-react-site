import { useState, useContext, useEffect } from "react";
import Header from "../components/Header";
import CartCSS from "../styles/Cart.module.css";
import { AppContext } from "../context/AppContext";
import { loadProducts } from "../services/api";
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();

    useEffect(() => {
        loadProducts("")
            .then(data => setProducts(data))
    }, [loadProducts]);

    return (
        <>
            <Header />
            <main>
                <h2>{getTotalCartItems()} Items</h2>
                <div className={CartCSS.info}>
                    <div className={CartCSS.items}>
                        {
                            getTotalCartItems() === 0 ? 
                                <p id={CartCSS.empty}>Your shopping bag is empty</p> :
                                products.map((product) => {
                                    if (cartItems[product.id] !== 0) {
                                        return <CartItem product={product}/>
                                    }
                                })
                        }
                    </div>
                    <div className={CartCSS.summary}>
                        <div>
                            <h3>Order Summary</h3>
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
                            <button onClick={() => navigate('/checkout')}>CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Cart;