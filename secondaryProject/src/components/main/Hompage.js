import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import highHeel from '../../../assets/highHeel.jpg'
import {AntDesign} from '@expo/vector-icons';
import LoadingPage from '../pages/LoadingPage';
import MyStack from '../stacknavigator/StackNavigator';
import LoginPage from '../pages/LoginPage';
import { createStackNavigator } from "@react-navigation/stack";
import { SliderBox } from 'react-native-image-slider-box';
import headerImage from '../../../assets/headerImage.jpg'
import { firebase_db } from '../auth/FirebaseConfig';
import {Ionicons, Feather, FontAwesome} from '@expo/vector-icons';
import SignUpModal from '../modal/SignUpModal';
import AsseyPage from '../pages/AsseyPage';
import headerStyle from '../../styles/HeaderStyles';
import { Avatar, Button, Card, Text } from 'react-native-paper';


export default function HomePage() {

const LeftContent = props => <Avatar.Icon {...props} icon = 'folder'/>  

  const [ready, setReady] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setReady(false);
    }, 3000);
  });

  return ready ? (<LoadingPage />) : (

    <View style={styles.container}>

      <View style={headerStyle.headerContainer}>
        <View style={headerStyle.headerImageContainer}>
          <Image source={headerImage} style={headerStyle.headerImageStyle} />
        </View>

        <View style={headerStyle.upperContainer}>
          <View style={headerStyle.uppercontainer01}>
            <Image source={highHeel} />
          </View>

          <View style={headerStyle.upperContainer02}>
            <Text style={headerStyle.headerText}>하루, 이틀 그리고 힐링</Text>
          </View>
        </View>
    </View>

      {/* <View style={styles.middleContainer}> */}
    
      {/* </View> */}
    </View>
  );
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