
import {StyleSheet}from 'react-native'

export const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            paddingEnd: 14,
            paddingStart: 14,
            marginTop: 22
        },
        cartContent:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 14,
            marginTop: 14,
            backgroundColor: '#030606',
            padding: 14,
            paddingRight: 30,
            paddingLeft: 30,
            borderRadius: 12,
            width: '100%',
            height: 100
        },
        title:{
            fontSize: 24,
            fontWeight: 'bold',
            color: '#fff'
        },
        cartButtton:{

        },
        dot:{
            backgroundColor: 'red',
            width: 21,
            height: 21,
            borderRadius: 11,
            justifyContent: 'center',
            alignItems: 'center',
            position:'absolute',
            zIndex: 99,
            top: -10,
            right: -10,
            
        },
        dotText:{
            fontSize: 12,
            color: '#fff',
            fontWeight: 'bold'
        },
        list:{
            marginBottom: 33
        }
    }
)