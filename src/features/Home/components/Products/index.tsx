import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles/styles.module'
//@ts-ignore
import {Feather} from '@expo/vector-icons'

interface ProductItemProps{
    data:{
        id: string;
        name: string;
        price: number;
        image: string;
        description: string;
    }
}



export const ProductItem =({data}: ProductItemProps)=>{

    return(
        
        <View style={styles.container}>

            <View style={styles.containerContent}>

                <View style={styles.containerImag}>

                   <Image 
                        source={{ uri: data.image }}
                        style={styles.imgItem}
                        resizeMode="cover"
                    />

                </View>

                <View style={styles.containerText}>

                    <Text style={styles.titleItem} >{data.name}</Text>
                    <Text style={styles.price}>
                        {data.price.toFixed(2)} 
                        <Feather name="dollar-sign" size={16} color="#000" />
                    </Text>
                    <Text style={styles.description}>{data.description}</Text>

                </View>


            </View>

            <TouchableOpacity style={styles.button}>

                <Text style={styles.buttonText}> Add to cart+</Text>

            </TouchableOpacity>
            

        </View>

    )
}