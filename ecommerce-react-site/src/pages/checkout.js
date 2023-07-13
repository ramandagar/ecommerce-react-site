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
            <select id="state" required defaultValue="">
                <option value="" disabled hidden>State*</option>
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

const ShippingMethod = ({setShippingCost}) => {
    const shippingMethod = [
        {id: 'standard', label: 'Standard - Free', value: 0},
        {id: 'express', label: 'Express - $5', value: 5},
        {id: 'overnight', label: 'Overnight - $10', value: 10}
    ];
    const [shippingOptions, setShippingOptions] = useState(0);

    return (
        <div>
            <h2>Shipping Method</h2>
            {
                shippingMethod.map((method) => (
                    <div key={method.id}>
                        <input 
                            id={method.id} 
                            type="checkbox" 
                            value={method.value} 
                            checked={shippingOptions == method.value ? true : false} 
                            onChange={(event) => {setShippingCost(event.target.value); setShippingOptions(event.target.value)}}
                        />
                        <label htmlFor={method.id}>{method.label}</label>
                    </div>
                ))
            }
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
    const [shippingCost, setShippingCost] = useState(0);
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
                    
                    <ShippingMethod 
                        setShippingCost={setShippingCost}
                    />

                    <PaymentMethod />

                    <Billing />
                </form>

                <div>
                    <OrderSummary
                        shippingCost={shippingCost}
                        btn={<button>SUBMIT ORDER</button>}
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