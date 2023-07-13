import { useContext } from 'react';
import OrderSummaryCSS from '../styles/OrderSummary.module.css'
import { AppContext } from '../context/AppContext';

const OrderSummary = ({shippingCost, btn}) => {
    const roundTwoDecimals = (num) => {
        return Math.round(num * 100) / 100;
    }
    
    const {getTotalCartAmount} = useContext(AppContext);
    const subtotal = roundTwoDecimals(getTotalCartAmount());
    const shipping = shippingCost;
    const tax = roundTwoDecimals(subtotal * 0.09);
    const total = roundTwoDecimals(subtotal + shipping + tax);

    return (
        <div className={OrderSummaryCSS.summary}>
            <div>
                <h3>Order Summary</h3>
                <div>
                    <p>Subtotal:</p>
                    <p>${subtotal}</p>
                </div>
                <div>
                    <p>Shipping:</p>
                    <p>${shipping}</p>
                </div>
                <div>
                    <p>Tax:</p>
                    <p>${tax}</p>
                </div>
                <div>
                    <p>Total:</p>
                    <p>${total}</p>
                </div>
                {btn}
            </div>
        </div>
    );
}

export default OrderSummary;