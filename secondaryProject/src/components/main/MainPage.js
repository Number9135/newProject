import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import hightheel from '../../../assets/hightheel.jpg'
import {AntDesign} from '@expo/vector-icons';
import LoadingPage from '../form/LoadingPage';
import styles from '../../styles/MainPageStyles';



export default function MainPage() {
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
                <Image source = {hightheel}/>
            </View>

            <View style = {styles.upperContainer02}>
                <Text style = {styles.headerText}>하루, 이틀 그리고 힐링</Text>
            </View>
        </View>


        <View style = {styles.secondaryUpperContainer}>
            <View style = {styles.secondaryUpperContainer01}>
                <TouchableOpacity>
                <AntDesign name ="login" size = {24} color="black"/>
                </TouchableOpacity>
            </View>

            <View style = {styles.secondaryUpperContainer02}>

            </View>
        </View>


        <View style = {styles.middleContainer}>

        </View>

        <View style = {styles.lowerContainer}>
            
        </View>
    </View>
  )
}