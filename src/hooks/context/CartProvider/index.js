import { createContext, useState, useContext, useEffect } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState({})

    useEffect(() => {
        const cartLocal = window.localStorage.getItem("cart");
        if(cartLocal){
            setCart(JSON.parse(cartLocal))
        }
    })

    const addToCart = (product) => {
        setCart(old => {
            let quantity = 0;
            if(old[product.pokemon.id]){
                quantity = old[product.pokemon.id].quantity
            }
            const newCart = {
                ...old,
                [product.pokemon.id]: {
                    quantity: quantity + 1,
                    product,
                },
            }
            window.localStorage.setItem('cart', JSON.stringify(newCart))
            return newCart
        })
    }

    return (
        <CartContext.Provider value={{cart, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const cart = useContext(CartContext)
    return cart
}