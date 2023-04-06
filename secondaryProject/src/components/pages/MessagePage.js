import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import highHeel from '../../../assets/highHeel.jpg'
import {AntDesign} from '@expo/vector-icons';
import LoadingPage from '../form/LoadingPage';
import MyStack from '../stacknavigator/StackNavigator';
import LoginPage from './LoginPage';
import { createStackNavigator } from "@react-navigation/stack";
import { SliderBox } from 'react-native-image-slider-box';
import headerImage from '../../../assets/headerImage.jpg'
import {Ionicons, Feather, FontAwesome} from '@expo/vector-icons';
import {Menu, Divider, Provider} from 'react-native-paper';


export default function MessagePage() {
   

  return (


    <View style = {styles.container}>

        <View style = {headerStyle.headerContainer}>

            <View style = {headerStyle.headerImageContainer}>
                <Image source = {headerImage} style ={headerStyle.headerImageStyle}/>
            </View>

            <View style = {headerStyle.upperContainer}>

                <View style = {headerStyle.uppercontainer01}>
                    <Image source = {highHeel}/>
                </View>

                <View style = {headerStyle.upperContainer02}>
                    <Text style = {headerStyle.headerTitleText}>하루, 이틀 그리고 힐링</Text>
                </View>

                <View style = {headerStyle.upperContainer03}>
                    <TouchableOpacity>
                        <Feather name='menu' size={20} color='black'/>
                    </TouchableOpacity>
                </View>
            </View>

        </View>


        <View style = {styles.middleContainer}>


                <View>
                     <Text style = {styles.middleText}>모든 꿈을 이룰 수 있다.</Text>
                     <Text sytle = {styles.middleText01}>-월트 디즈니-</Text>
                </View>

        </View>

        
        </View>
   
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        width : 410,
        height : 700,
        borderWidth : 1,
       
    },



    lowerContainer : {
        
        borderWidth : 1,
        height : 80,
        width : 410,
        flexDirection : "row",
        justifyContent : "space-around",
        alignItems : "center",
        backgroundColor : "linen"
       
    },

    

    textStyle : {
        fontSize : 14,
    },



    headerText : {
        textAlign : "auto",
        paddingTop : 20,
        fontSize : 20
    },

    middleContainer : {
        borderWidth : 1,
        flex : 2,
       
       
    },

    middleText : {
        fontSize : 25,
        alignSelf : "center"
    },

    middleText01 : {
        paddingTop : 30,
        fontSize : 30,
    },

})