import React from 'react'
import MainPage from './src/components/main/MainPage';
import LoadingPage from './src/components/form/LoadingPage';
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/components/stacknavigator/StackNavigator'
import LoginPage from './src/components/form/LoginPage';
import {View} from 'react-native'
// import { initializeApp } from 'firebase/app';
import TestPage from './src/components/main/TestPage';

export default function App() {


  return (
    <NavigationContainer>
    <StatusBar style="black" />
    <StackNavigator/>
    </NavigationContainer>);

  
}