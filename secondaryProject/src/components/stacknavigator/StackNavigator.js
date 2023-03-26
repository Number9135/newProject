import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from "../form/LoginPage";
import MainPage from '../main/MainPage';
import SignUpModal from '../modal/SignUpModal';

const Stack = createStackNavigator();

const MyStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name ="MainPage" component = {MainPage}/>
            <Stack.Screen name ="LoginPage" component = {LoginPage}/>
            <Stack.Screen name ="SignUpMoadal" component = {SignUpModal}/>
        </Stack.Navigator>
    )
}

export default MyStack;