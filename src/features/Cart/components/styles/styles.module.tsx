
import {StyleSheet} from "react-native"

export const styles = StyleSheet.create(
    {
        container:{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: '#000000',
            borderRadius: 10,
            marginBottom: 10,
            padding: 10
        },
        containerTitle:{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
        title:{
            fontWeight: 'bold',
            fontSize: 16,
            fontFamily: 'Roboto'
        },
        image:{
            width: 120,
            height: 120,
            borderRadius: 10,
        },
        price:{
            fontSize: 22,
            fontFamily: 'Roboto'
        },
        containerButton:{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
            marginBottom: 10
        },
        button:{
            backgroundColor: '#000000',
            borderRadius: 5,
            marginHorizontal: 10,
            width: 30,
            height: 30,
            alignItems: 'center',
            justifyContent: 'center'
        },
        buttonTrash:{
            backgroundColor: '#b40404',
            borderRadius: 5,
            marginHorizontal: 10,
            width: 30,
            height: 30,
            alignItems: 'center',
            justifyContent: 'center'
        },
        textButton:{
            color: '#FFFFFF',
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
            fontFamily: 'Roboto'
        },
        quantity:{
            fontSize: 22
        }
    }
)