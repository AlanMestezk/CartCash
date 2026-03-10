import { View, Text, Image, TouchableOpacity } from "react-native"
import {styles} from "./styles/styles.module"
import { useState } from "react"
//@ts-ignore
import {Feather} from '@expo/vector-icons'

interface CartItemProps{
    id?: string
    name: string
    image: string
    price: number
    amount: number
    addAmount: (id: string) => void
    removeAmount: (id: string) => void
}


export const CartItem=({id, name, image, price, amount, addAmount, removeAmount}: CartItemProps)=>{

    const [itemAmount, setItemAmount] = useState(amount)

    const handleIncreaseAmount = ()=>{
        addAmount && addAmount('')
        setItemAmount(item => item + 1)
    }

    const handleRemoveAmount = () => {
        removeAmount && removeAmount('')
        setItemAmount(item => item - 1)
    }

    

    return(
        <View style={styles.container}>
            
            <View style={styles.containerTitle}>

                <Text style={styles.title}>{name}</Text>

                <Image 
                    source={{ uri: image }}
                    style={styles.image}
                />

                <Text style={styles.price}>{price.toFixed(2)}$</Text>

            </View>

            <View style={styles.containerButton}>

                <TouchableOpacity style={amount > 1 ? styles.button : styles.buttonTrash} onPress={handleRemoveAmount}>

                    {
                        amount <= 1 ?
                        (
                            <Text style={styles.textButton}> 
                                <Feather name="trash" size={20} color="#fffdfd" /> 
                            </Text>
                        ):(
                            <Text style={styles.textButton}> 
                                 <Text style={styles.textButton}>-</Text>
                            </Text>
                        )
                        
                    }

                </TouchableOpacity>

                <Text style={styles.quantity}>{amount}</Text>

                <TouchableOpacity style={styles.button} onPress={handleIncreaseAmount}>
                    <Text style={styles.textButton}>+</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}