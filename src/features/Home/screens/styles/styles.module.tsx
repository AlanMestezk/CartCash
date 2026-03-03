
import {StyleSheet}from 'react-native'

export const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor: '#FAFAFA',
            paddingEnd: 14,
            paddingStart: 14,
            marginTop: 55
        },
        cartContent:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 14,
            marginTop: 14,
            backgroundColor: '#030606',
            padding: 14,
            borderRadius: 12,
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
        }
    }
)