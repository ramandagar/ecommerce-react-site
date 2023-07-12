import OrderSummaryCSS from '../styles/OrderSummary.module.css'

const OrderSummary = ({subtotal, shipping, tax, total, btn}) => {
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