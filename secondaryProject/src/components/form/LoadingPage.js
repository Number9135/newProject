import React from 'react'
import {View, Style, StyleSheet, Text, Image} from 'react-native';
import loadingImage from '../../../assets/loadingImage.jpg';


export default function LoadingPage() {
  return (
    <View style={{justifyContent:'center', alignItems:'center'}}>
        <Image 
          
            source = {loadingImage} style={{width:400, height:600}}/>
    </View>
  )
}
