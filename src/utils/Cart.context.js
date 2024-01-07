import { createContext, useContext, useState } from 'react';

const contentProvider = createContext()

export const CartContext = ({ children }) => {
    let [cartLength, setCartLength] = useState(0)

    const getCartLength = () => {
        return cartLength
    }
    const addToCart = () => {
        setCartLength((prevLength) => prevLength + 1);

    }

    return (

        < contentProvider.Provider value={{ getCartLength, addToCart }}>
            {children}
        </contentProvider.Provider>
    )
}

export const useCart = () => {
    return useContext(contentProvider)
}

