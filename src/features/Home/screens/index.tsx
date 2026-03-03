import { View, Text, FlatList, TouchableOpacity } from "react-native"
import { styles } from "./styles/styles.module"
import { useState } from "react"
import {Products} from '../../../data/products'
//@ts-ignore
import {Feather} from '@expo/vector-icons'


export const Home = () => {

   const [product, setProducts] = useState(Products)

    return(
        <View style= {styles.container}>
            
            <View style={styles.cartContent}>

                <Text style={styles.title}>Show Products</Text> 

                <TouchableOpacity style={styles.cartButtton}>

                    <View style={styles.dot}>
                        <Text style={styles.dotText}>3</Text>
                    </View>
                    <Feather name="shopping-cart" size={30} color="#fff" />

                </TouchableOpacity>

            </View>
            
        </View>
    )

}