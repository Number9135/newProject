import React from 'react'
import {View, Style, StyleSheet, Text, Image} from 'react-native';
import loadingImage from '../../../assets/loadingImage.jpg';


export default function LoadingPage() {
  return (
    <View>
        <Image 
          
            source = {loadingImage}/>
    </View>
  )
}
