import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import React, {useEffect, useRef, useState} from "react";
import {View, Text, StyleSheet, TouchableWithoutFeedback, Animated} from 'react-native';
import WritingPage from '../pages/WritingPage';
import { useNavigation } from "@react-navigation/native";



export default function FloatingButton(open){


    const [pencil, setPencil] = useState(false)

   
   
    const animation = useRef(new Animated.Value(0)).current

    const toggleMenu = () =>{
        const toValue =open ? 0 : 1
        Animated.spring(animation,{
            toValue,
            friction : 7,
            useNativeDriver: true
        }).start();
        
        open = !open
    }

    const pinStyle = {
        transform : [
            {scale: animation},
            {
                translateY: animation.interpolate({
                    inputRange: [0,1],
                    outputRange: [0, -60]
                })

            }
        ]
    }

    const thumbStyle = {
        transform : [
            {scale: animation},
            {
                translateY: animation.interpolate({
                    inputRange: [0,1],
                    outputRange: [0, -120]
                })

            }
        ]
    }

    const rotation = {
        transform: [
            {
                rotate : animation.interpolate({
                    inputRange : [0, 1],
                    outputRange : ["0deg", "90deg"]
                })
            }
        ]
    }

    const navigation = useNavigation();
   
        return(
            <View style = {[styles.container, ]}>
                <TouchableWithoutFeedback onPress = {()=>{navigation.navigate('DibListPage')}}>
                    <Animated.View style = {[styles.button, styles.secondary, thumbStyle]}>
                        <Entypo name="heart" size={20} color='black'/>
                    </Animated.View>
                 
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={()=>{navigation.navigate('WritingPage')}}>
                    <Animated.View style = {[styles.button, styles.secondary, pinStyle]}>
                        <Ionicons name="pencil" size={20} color='black'/>
                
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={toggleMenu}>
                    <Animated.View style = {[styles.button, rotation]}>
                        <AntDesign name="plus" size={25} color='black'/>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        )

       
}


const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent : 'center',
        position : 'absolute',
        borderWidth : 0,
        marginTop : 500,
        marginLeft : 350,
      
    },

    button : {
        position: 'absolute',
        width : 50,
        height : 50,
        borderWidth : 0,
        backgroundColor : 'lightpink',
        opacity : 0.8,
        borderRadius : 48/3,
        alignItems : 'center',
        justifyContent : 'center',
        shadowRadius : 10,
        shadowColor: 'lightpink',
        shadowOpacity : 0.3,
        shadowOffset :{
            height : 10
        },
    },

    menu : {
        backgroundColor : 'lightpink',
        opacity : 0.8,
        marginLeft: 240,
        
        
    },

    secondary : {
        width : 45,
        height : 45,
       marginLeft : 2,
       borderRadius : 48/3,
        

    }
})