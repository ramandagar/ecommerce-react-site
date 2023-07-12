import Header from "../components/Header";
import OrderSummary from "../components/OrderSummary";
import CheckoutCSS from "../styles/Checkout.module.css";

const Checkout = () => {
    return (
        <>
            <Header />
            <main className={CheckoutCSS.checkout}>
                <form className={CheckoutCSS.form}>
                    <div className={CheckoutCSS.shippingInfo}>
                        <h2>Shipping Info</h2>
                        <input type="text" placeholder="First Name*" required/>
                        <input type="text" placeholder="Last Name*" required/>
                        <input type="" placeholder="Address*" required/>
                        <input type="text" placeholder="Apt/Suite"/>
                        <input type="text" placeholder="City*" required/>
                        <input type="number" placeholder="ZIP Code*" required/>
                        <select name="state" required>
                            <option value="" disabled selected hidden>State*</option>
                            <option value="" disabled>Select a State</option>
                            <option value="california">California</option>
                        </select>
                    </div>
                    
                    <div className={CheckoutCSS.contact}>
                        <h2>Contact Info</h2>
                        <input type="email" placeholder="Email*" required/>
                        <input type="number" placeholder="Phone Number"/>
                    </div>
                    
                    <div>
                        <h2>Shipping Method</h2>
                        <div>
                            <input name="standard" type="checkbox" checked/>
                            <label for="standard">Standard - Free</label>
                        </div>
                        <div>
                            <input name="express" type="checkbox"/>
                            <label for="express">Express - $5</label>
                        </div>
                        <div>
                            <input name="overnight" type="checkbox"/>
                            <label for="overnight">Overnight - $10</label>
                        </div>
                    </div>

                    <div>
                        <h2>Payment Method</h2>
                        <div>
                            <input name="credit" type="checkbox" checked/>
                            <label for="credit">Credit Card</label>
                        </div>
                        <div>
                            <input name="paypal" type="checkbox"/>
                            <label for="paypal">Paypal</label>
                        </div>
                        <div>
                            <input name="gift-card" type="checkbox"/>
                            <label for="gift-card">Gift Card</label>
                        </div>
                    </div>

                    <div>
                        <h2>Billing</h2>
                        <div>
                            <input name="same" type="checkbox"/>
                            <label for="same">Same as Shipping Address</label>
                        </div>
                        <div>
                            <input name="new" type="checkbox"/>
                            <label for="new">Enter new Billing Address</label>
                        </div>
                    </div>
                </form>

                <OrderSummary />
            </main>
        </>
    );
}

export default Checkout;