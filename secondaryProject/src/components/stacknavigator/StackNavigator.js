import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from "../pages/LoginPage";
import MainPage from '../main/MainPage';
import WritingPage from '../pages/WritingPage';

const Stack = createStackNavigator();

const MyStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name ="MainPage" component = {MainPage}/>
            <Stack.Screen name ="LoginPage" component = {LoginPage}/>
            <Stack.Screen name ="WritingPage" component = {WritingPage}/>

         
        </Stack.Navigator>
    )
}

export default MyStack;