import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import highHeel from '../../../assets/highHeel.jpg'
import {AntDesign} from '@expo/vector-icons';
import LoadingPage from './LoadingPage';
import MyStack from '../stacknavigator/StackNavigator';

import { createStackNavigator } from "@react-navigation/stack";
import { SliderBox } from 'react-native-image-slider-box';
import headerImage from '../../../assets/headerImage.jpg'
import {Ionicons, Feather, FontAwesome} from '@expo/vector-icons';



export default function AsseyPage({navigation}) {
   

  return (


    <View style = {styles.container}>

        <View style = {styles.headerContainer}>

            <View style = {styles.headerImageContainer}>
                <Image source = {headerImage} style ={styles.headerImageStyle}/>
            </View>

            <View style = {styles.upperContainer}>

                <View style = {styles.uppercontainer01}>
                    <Image source = {highHeel}/>
                </View>

                <View style = {styles.upperContainer02}>
                    <Text style = {styles.headerText}>하루, 이틀 그리고 힐링</Text>
                </View>
            </View>

        </View>


        <View style = {styles.middleContainer}>


                <View>
                     <Text style = {styles.middleText}>asdasd있asdasdas다면 모든 꿈을 이룰 수 있다.</Text>
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

    headerContainer : {
        borderWidth : 1,
        height : 150,
        justifyContent : "center",
        alignItems : "center",
       
    },

    headerImageStyle : {
        height : 100,
        width : 405,
    },

    headerImageContainer : {
        borderWidth : 1,
        height : 100,
       
    },

    upperContainer : {
        borderWidth : 1,
        height : 50,
        width : 410,
        flexDirection : "row",
        alignContent : "flex-start",
        
    },

    uppercontainer01 : {
        
        borderWidth : 1,
        height : 50,
        width : 50,
        alignItems : "center",
        justifyContent : "center",
    },

    upperContainer02 : {
        
        borderWidth : 1,
        height : 50,
        width : 410,
        marginTop : 0,
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

    menuContainer : {
        borderWidth : 1,
        borderRadius : 30,
        height : 40,
        width : 75,
        alignItems : "center",
        justifyContent : "center",
        backgroundColor : "mistyrose",
        
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



