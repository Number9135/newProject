import React from 'react'
import {View, Style, StyleSheet, Text, Image} from 'react-native';
import loadingImage from '../../../assets/loadingImage.jpg';
import styles from '../../styles/LoadingPageStyles';


export default function LoadingPage() {
  return (
    <View style = {styles.mainContainer}>
        <Image 
            style = {styles.imageStyle}
            source = {loadingImage}/>
    </View>
  )
}
