import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from "../form/LoginPage";
import MainPage from '../main/MainPage';
import TestPage from '../main/TestPage';

const Stack = createStackNavigator();

const MyStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name ="MainPage" component = {MainPage}/>
            <Stack.Screen name ="LoginPage" component = {LoginPage}/>
            <Stack.Screen name ="TestPage" component = {TestPage}/>
        </Stack.Navigator>
    )
}

export default MyStack;