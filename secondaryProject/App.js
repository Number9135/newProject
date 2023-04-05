import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/components/stacknavigator/StackNavigator'
import {View} from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { initializeApp } from 'firebase/app';
import Main from './src/components/main/Main';

export default function App() {

  return (
    <SafeAreaProvider>
      <Main/>
    </SafeAreaProvider>
    );

  
}