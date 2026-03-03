
import {useState, createContext} from 'react';

export const CartContext = createContext({})

type CartProviderProps = {
    children: React.ReactNode
}

export const CartProvider = ({children}: CartProviderProps)=>{

    const [cart, setCart] = useState([])


    return(
        
        <CartContext.Provider value={{cart}}>

            {children}

        </CartContext.Provider>
    )
}