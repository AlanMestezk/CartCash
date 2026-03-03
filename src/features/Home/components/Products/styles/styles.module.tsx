
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create(

    {
        container:{
            borderWidth: 1,
            borderColor: '#000',
            padding: 10,
            paddingBottom: 14,
            paddingTop: 14,
            marginBottom: 14,
            borderRadius: 12,
            alignItems: 'center',
            justifyContent: 'center',
        },
        containerContent:{
            padding: 20,
             alignItems: 'center',
             justifyContent: 'center',
        },
        containerImag: {
            alignItems: 'center',
            justifyContent: 'center',
        },
        imgItem: {
            width: 200,
            height: 200,
            borderRadius: 20,
            resizeMode: 'cover'
        },
        containerText:{
            marginTop: 10,
            alignItems: 'center',
            justifyContent: 'center',
        },
        titleItem:{
            fontSize: 22,
            fontFamily: 'Roboto-Regular',
            fontWeight: 'bold'
        },
        price:{
            fontSize: 18,
            fontFamily: 'Roboto-Regular',
            fontWeight: 'bold',
        },
        description:{
            fontSize: 16,
            fontFamily: 'Roboto-Regular'
        },
        button:{
            backgroundColor: '#030606',
            width: 140,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 12,
        },
        buttonText:{
            color: '#fff',
            fontSize: 14,
            fontWeight: 'bold'
        }
    }

)