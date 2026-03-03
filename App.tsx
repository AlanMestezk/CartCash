
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer }               from '@react-navigation/native';
import React from 'react';
import { Routes } from './src/routes';
import { CartProvider } from './src/context/CartContext';

export default function App() {

  const title = 'CartShop';

  return (

    <NavigationContainer>

      <CartProvider>
        
        <StatusBar backgroundColor={"#030606"} barStyle="dark-content"/> 
        <Routes />
        
      </CartProvider>


    </NavigationContainer>

  );
}

