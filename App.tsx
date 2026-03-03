
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer }               from '@react-navigation/native';
import React from 'react';
import { Routes } from './src/routes';

export default function App() {

  const title = 'CartShop';

  return (

    <NavigationContainer>

      <StatusBar backgroundColor={"#FAFAFA"} barStyle="dark-content"/> 
      <Routes />

    </NavigationContainer>

  );
}

