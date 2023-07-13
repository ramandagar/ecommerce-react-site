import { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import OrderSummary from "../components/OrderSummary";
import CheckoutCSS from "../styles/Checkout.module.css";
import { AppContext } from "../context/AppContext";
import { loadProducts } from "../services/api";

const ShippingInfo = () => {
    return (
        <div className={CheckoutCSS.shippingInfo}>
            <h2>Shipping Info</h2>
            <input type="text" placeholder="First Name*" required/>
            <input type="text" placeholder="Last Name*" required/>
            <input type="" placeholder="Address*" required/>
            <input type="text" placeholder="Apt/Suite"/>
            <input type="text" placeholder="City*" required/>
            <input type="number" placeholder="ZIP Code*" required/>
            <select id="state" required>
                <option value="" disabled selected hidden>State*</option>
                <option value="" disabled>Select a State</option>
                <option value="california">California</option>
            </select>
        </div>
    );
}

const ContactInfo = () => {
    return (
        <div className={CheckoutCSS.contact}>
            <h2>Contact Info</h2>
            <input type="email" placeholder="Email*" required/>
            <input type="number" placeholder="Phone Number"/>
        </div>
    );
}

const ShippingMethod = () => {
    return (
        <div>
            <h2>Shipping Method</h2>
            <div>
                <input id="standard" type="checkbox" checked/>
                <label htmlFor="standard">Standard - Free</label>
            </div>
            <div>
                <input id="express" type="checkbox"/>
                <label htmlFor="express">Express - $5</label>
            </div>
            <div>
                <input id="overnight" type="checkbox"/>
                <label htmlFor="overnight">Overnight - $10</label>
            </div>
        </div>
    );
}

const PaymentMethod = () => {
    return (
        <div>
            <h2>Payment Method</h2>
            <div>
                <input id="credit" type="checkbox"/>
                <label htmlFor="credit">Credit Card</label>
            </div>
            <div>
                <input id="gift-card" type="checkbox"/>
                <label htmlFor="gift-card">Gift Card</label>
            </div>
        </div>
    );
}

const Billing = () => {
    return (
        <div>
            <h2>Billing</h2>
            <div>
                <input id="same" type="checkbox"/>
                <label htmlFor="same">Same as Shipping Address</label>
            </div>
            <div>
                <input id="new" type="checkbox"/>
                <label htmlFor="new">Enter new Billing Address</label>
            </div>
        </div>
    );
}

const Items = ({product, qty}) => {
    return (
        <div className={CheckoutCSS.item}>
            <img src={product.image} alt="Product"/>
            <div>
                <p>{product.title}</p>
                <p>${product.price}</p>
                <p>Qty: {qty}</p>
            </div>
        </div>
    );
}

const Checkout = () => {
    const [products, setProducts] = useState([]);
    const {cartItems} = useContext(AppContext);

    useEffect (() => {
        loadProducts("")
            .then(data => setProducts(data))
    },[loadProducts])

    return (
        <>
            <Header />
            <main className={CheckoutCSS.checkout}>
                <form className={CheckoutCSS.form}>
                    <ShippingInfo />
                    
                    <ContactInfo />
                    
                    <ShippingMethod />

                    <PaymentMethod />

                    <Billing />
                </form>

                <div>
                    <OrderSummary
                        shippingCost={0}
                        btn={<button>SUBMIT PAYMENT</button>}
                    />

                    <div className={CheckoutCSS.items}>
                        {
                            products.map((product) => {
                                if (cartItems[product.id] !== 0) {
                                    return <Items 
                                                key={product.id}
                                                product={product} 
                                                qty={cartItems[product.id]}
                                            />
                                }
                            })
                        }
                    </div>
                </div>
            </main>
        </>
    );
}

export default Checkout;