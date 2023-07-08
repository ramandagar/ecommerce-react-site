import { useState, createContext, useEffect } from "react";
import { loadProducts, PRODUCTS } from "../services/api";

const AppContext = createContext();

const response = loadProducts("").then(data => {
    return data;
}); 
const products = await response;

const getDefaultCart = async () => {
    let cart = {};
    for (let i = 1; i < products.length + 1; i++ ) {
        cart[i] = 0; 
    }
    return cart;
};

const AppContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    useEffect(() => {
        getDefaultCart()
            .then(data => setCartItems(data))
    }, [])

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = products.find((product) => product.id == Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    };

    const getTotalCartItems = () => {
        let totalItems = 0;
        for (const item in cartItems) {
            totalItems += cartItems[item];
        }
        return totalItems;
    };

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1 }))
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1 }))
    };

    const updateCartAmount = (itemId, newAmount) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}))
    };

    const contextValue = {cartItems, addToCart, removeFromCart, updateCartAmount, getTotalCartAmount, getTotalCartItems}

    console.log(cartItems);
    return <AppContext.Provider value={contextValue}>{props.children}</AppContext.Provider>
};

export { AppContext, AppContextProvider};