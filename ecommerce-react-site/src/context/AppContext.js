import { useState, createContext } from "react";

const AppContext = createContext();

const AppContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(['hello', 'hello']);

    return <AppContext.Provider value={{cartItems, setCartItems}}>{props.children}</AppContext.Provider>
}

export { AppContext, AppContextProvider};