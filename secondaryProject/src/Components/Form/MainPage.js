import React, { useEffect, useState } from 'react'
import {View, StyleSheet, Text, Image} from 'react-native'
import styles from '../../Styles/MainPage/styles'
import LoginPage from './LoginPage'
import hightheel from '../assets/hightheel.jpg'

export default function MainPage() {
    const [ready, setReady] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setReady(false)
        }, 3000)
    })
  
    return ready ? <LoginPage/> :  (

    

    <View style = {styles.container}>
        <View style = {styles.upperContainer}>
            <View style = {styles.uppercontainer01}>
                <Image source = {hightheel}/>
            </View>
            <View style = {styles.upperContainer02}>

            </View>
        </View>


        <View style = {styles.middleContainer}>
        <Text>
            asd
        </Text>
        </View>


        <View style = {styles.lowerContainer}>

        </View>
    </View>
  )
}

