import { View, Text, FlatList, TouchableOpacity } from "react-native"
import { styles } from "./styles/styles.module"
import { useContext, useEffect, useState } from "react"
import {Products} from '../../../data/products'
import {useNavigation} from '@react-navigation/native'
//@ts-ignore
import {Feather} from '@expo/vector-icons'
import { ProductItem } from "../components/Products"
import { CartContext } from "../../../context/CartContext"

export const Home = () => {
    //@ts-ignore
    const {cart} = useContext(CartContext)

   const navigation = useNavigation()

   const [product, setProducts] = useState(Products)


    const handleNavigateToCart =()=>{
        //@ts-ignore
        navigation.navigate('Cart')
    }



    return(
        <View style= {styles.container}>
            
            <View style={styles.cartContent}>

                <Text style={styles.title}>CartShop</Text> 

                <TouchableOpacity style={styles.cartButtton} onPress={handleNavigateToCart}>

                <View style={styles.dot}>  

                    <Text style={styles.dotText}>
                        {cart?.length}
                    </Text>

                </View>


                    <Feather name="shopping-cart" size={35} color="#fff" />

                </TouchableOpacity>

            </View>

            <View style={{ flex: 1 }}>
                <FlatList 
                    style={styles.list}
                    data={product}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={
                        ({item})=> <ProductItem data={item}/>
                    }
                />
            </View>
            
        </View>
    )

}