import { useState, useContext } from "react";
import Header from "../../components/Header";
import CartCSS from "../../styles/Cart.module.css";
import { AppContext } from "../../context/AppContext";

const CartItem = () => {
    return (
        <div className={CartCSS.item}>
            <img src="" alt="image"/>
            <div>
                <p>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <button>Remove</button>
            </div>
        </div>
    );
}

const Cart = () => {
    const {cartItems} = useContext(AppContext)
    return (
        <>
            <Header />
            <main>
                <h2>1 Items</h2>
                <div className={CartCSS.info}>
                    <div className={CartCSS.items}>
                        {
                            cartItems.map( () => (
                                <CartItem />
                            ))
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