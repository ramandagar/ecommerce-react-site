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
            <input type="text" placeholder="Address*" required/>
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
            <input type="tel" placeholder="Phone Number"/>
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
    const [paymentMethod, setPaymentMethod] = useState(true);

    return (
        <div>
            <h2>Payment Method</h2>
            <div>
                <input id="credit" type="checkbox" checked={paymentMethod && true} onChange={() => setPaymentMethod(true)}/>
                <label htmlFor="credit">Credit Card</label>
            </div>
            <div>
                <input id="gift-card" type="checkbox" checked={!paymentMethod && true} onChange={() => setPaymentMethod(false)}/>
                <label htmlFor="gift-card">Gift Card</label>
            </div>
            {
                paymentMethod ? 
                    <div className={CheckoutCSS.credit}>
                        <input type="text" placeholder="Number*" required/>
                        <input type="text" placeholder="Cardholder Name*" required/>
                        <div>
                            <select id="exp-month" required defaultValue="">
                                <option value="" disabled hidden>Exp. Month*</option>
                                <option value="" disabled>Select a Month</option>
                                <option value="01">01</option>
                            </select>
                            <select id="exp-year" required defaultValue="">
                                <option value="" disabled hidden>Exp. Year*</option>
                                <option value="" disabled>Select a Year</option>
                                <option value="2023">2023</option>
                            </select>
                        </div>
                        <input type="number" placeholder="CVV*" required/>
                    </div> 
                :
                    <div className={CheckoutCSS.giftCard}>
                        <input type="number" placeholder="Gift Card Number*" required/>
                        <input type="number" placeholder="Pin*" required/>
                    </div>
            }
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