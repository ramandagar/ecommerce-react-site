import { useContext } from "react";
import CartCSS from "../../styles/Cart.module.css";
import { AppContext } from "../../context/AppContext";

const CartItem = ({product}) => {
    const {removeFromCart, addToCart, cartItems, updateCartAmount} = useContext(AppContext);

    return (
        <div className={CartCSS.item}>
            <img src="" alt={product.title}/>
            <div>
                <p>{product.title}</p>
                <p>{product.price}</p>
                <p>1</p>
                <button onClick={() => removeFromCart(product.id)}>-</button>
                <input value={cartItems[product.id]} onChange={(event) => updateCartAmount(product.id, event.target.value)}/>
                <button onClick={() => addToCart(product.id)}>+</button>
            </div>
        </div>
    );
}

export default CartItem;