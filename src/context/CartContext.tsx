
import {useState, createContext} from 'react';

export const CartContext = createContext({})

type CartProviderProps = {
    children: React.ReactNode
}

export interface CartContextProps{
    id: string
    name: string
    price: number
    category: string
    image: string
    description: string
    quantity: number
    total: number
    amount: number
}

export const CartProvider = ({children}: CartProviderProps)=>{

    const [cart, setCart] = useState<CartContextProps[]>([])

    const addIItemCart = (newItem: CartContextProps)=>{
        //item in cart = add to cart
        const indexItem = cart.findIndex(item => item.id === newItem.id)

        if(indexItem !== -1){
            //se entrou aqui, quer dizer que ele já tem o item no carrinho, então só precisa atualizar a quantidade
            console.log('Item ja clicado')
            const cartList = [...cart]

            cartList[indexItem].amount =  cartList[indexItem].amount + 1;

            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;

            setCart(cartList)
            console.log(cartList)
            return
        }

        let data = {
            ...newItem, 
            amount: 1,
            total: newItem.price
        }

        setCart([...cart, data])
    } 


    return(
        
        <CartContext.Provider 
            value={
                {
                    cart,
                    addIItemCart
                }
            }
        >

            {children}

        </CartContext.Provider>
    )
}