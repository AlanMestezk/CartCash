import { View, Text, FlatList, TouchableOpacity } from "react-native"
import { styles } from "./styles/styles.module"
import { useEffect, useState } from "react"
import {Products} from '../../../data/products'
import {useNavigation} from '@react-navigation/native'
//@ts-ignore
import {Feather} from '@expo/vector-icons'
import { ProductItem } from "../components/Products"

export const Home = () => {

    const navigation = useNavigation()

   const [product, setProducts] = useState(Products)
   const [numberItemCart, setNumberItemCart] = useState(0)
   const [isTrueItemToCart, setIsTrueItemToCart] = useState(false)

    const handleNavigateToCart =()=>{
        //@ts-ignore
        navigation.navigate('Cart')
    }

    const handleIsTrueItemToCart =()=>{

        if(numberItemCart  > 0){
            setIsTrueItemToCart(true)
        }
    }

    const handleAddItemToCart = ()=>{

       setNumberItemCart((prev) => {
            const newValue = prev + 1

            if (newValue > 0) {
                setIsTrueItemToCart(true)
                console.log(newValue)
            }

            return newValue
        })
    }


    return(
        <View style= {styles.container}>
            
            <View style={styles.cartContent}>

                <Text style={styles.title}>CartShop</Text> 

                <TouchableOpacity style={styles.cartButtton} onPress={handleNavigateToCart}>

                    {
                        isTrueItemToCart ? (
                            <View style={styles.dot}>  

                                <Text style={styles.dotText}>{numberItemCart}</Text>

                            </View>

                        ):(
                            <></>
                        )
                    }


                    <Feather name="shopping-cart" size={35} color="#fff" />

                </TouchableOpacity>

            </View>

            <View style={{ flex: 1 }}>
                <FlatList 
                    style={styles.list}
                    data={product}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={
                        ({item})=> <ProductItem data={{...item, addItemToCart: handleAddItemToCart}}/>
                    }
                />
            </View>
            
        </View>
    )

}