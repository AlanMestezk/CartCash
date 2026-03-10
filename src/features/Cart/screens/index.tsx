import { View, Text, FlatList } from "react-native"
import { styles } from "./styles/styles.module"
import {CartContext} from "../../../context/CartContext"
import { useContext } from "react"
import { CartItem } from "../components/CartItem"


export const Cart = () => {

    //@ts-ignore
    const {cart, addIItemCart, removeItemCart} = useContext(CartContext)

    return(
        <View style={styles.container}>
            
            <FlatList 
                data={cart}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => String(item.id)}
                renderItem = {
                    ({item}) =>(
                        <CartItem
                            name={item.name}
                            image={item.image}
                            price={item.price} 
                            amount={item.amount}
                            addAmount={()=> addIItemCart(item)}  
                            removeAmount={() => removeItemCart(item.id)}                
                        />
                    )   
                } 
            />

        </View>
    )

}