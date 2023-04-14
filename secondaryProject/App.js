import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/components/stacknavigator/StackNavigator'
import MainPage from './src/components/main/MainPage'
import WritingPage from './src/components/pages/WritingPage';
import ImagePick from './src/components/form/ImagePick';


export default function App() {

  return (
    
  // <NavigationContainer>
  // <StatusBar style="black" />
  //   <StackNavigator/>
  //  </NavigationContainer>

  <ImagePick/>
    
    
   
    );

  
}