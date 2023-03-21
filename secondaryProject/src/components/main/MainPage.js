import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import highHeel from '../../../assets/highHeel.jpg'
import {AntDesign} from '@expo/vector-icons';
import LoadingPage from '../form/LoadingPage';
import styles from '../../styles/MainPageStyles';
import MyStack from '../stacknavigator/StackNavigator';
import LoginPage from '../form/LoginPage';
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableHighlight } from 'react-native-gesture-handler';




export default function MainPage({navigation}) {
    const [ready, setReady] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setReady(false)
        }, 3000)
    })
  
   return ready ? <LoadingPage/> :  (

    

    <View style = {styles.container}>
        <View style = {styles.upperContainer}>
            <View style = {styles.uppercontainer01}>
                <Image source = {highHeel}/>
            </View>

            <View style = {styles.upperContainer02}>
                <Text style = {styles.headerText}>하루, 이틀 그리고 힐링</Text>
            </View>
        </View>


        <View style = {styles.secondaryUpperContainer}>
            <View style = {styles.secondaryUpperContainer01}>
                <TouchableOpacity onPress={()=>{navigation.navigate('LoginPage')}}>
                <AntDesign name ="login" size = {24} color="black"/>
                </TouchableOpacity>
            </View>
            
            <View style = {styles.secondaryUpperContainer02}>
                <TouchableHighlight onPress={()=>{}} underlayColor = "blue">
                    <View style = {styles.menuContainer}>
                        <Text style = {styles.textStyle}>감동</Text>
                    </View>
                </TouchableHighlight>

                <TouchableOpacity>
                    <View style = {styles.menuContainer}>
                        <Text style = {styles.textStyle}>명언</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style = {styles.menuContainer}>
                        <Text style = {styles.textStyle}>속담</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style = {styles.menuContainer}>
                        <Text style = {styles.textStyle}>동기</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>


        <View style = {styles.middleContainer}>

        </View>

        <View style = {styles.lowerContainer}>
            
        </View>
    </View>
  )
}