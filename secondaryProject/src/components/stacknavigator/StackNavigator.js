import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from "../pages/LoginPage";
import MainPage from '../main/Hompage';
import AsseyPage from '../pages/AsseyPage';


const Stack = createStackNavigator();

const MyStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name ="MainPage" component = {MainPage}/>
            <Stack.Screen name ="LoginPage" component = {LoginPage}/>
            <Stack.Screen name = 'AsseyPage' component={AsseyPage}/>
         
        </Stack.Navigator>
    )
}

export default MyStack;