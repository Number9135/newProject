import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import highHeel from '../../../assets/highHeel.jpg'
import {AntDesign} from '@expo/vector-icons';
import LoadingPage from '../form/LoadingPage';
import MyStack from '../stacknavigator/StackNavigator';
import LoginPage from '../pages/LoginPage';
import { createStackNavigator } from "@react-navigation/stack";
import headerImage from '../../../assets/headerImage.jpg'
import {Ionicons, Feather, FontAwesome} from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';


export default function HomePage({navigation}) {


  const [ready, setReady] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setReady(false);
    }, 3000);
  });

  return ready ? (
    <LoadingPage />
  ) : (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerImageContainer}>
          <Image source={headerImage} style={styles.headerImageStyle} />
        </View>

        <View style={styles.upperContainer}>
          <View style={styles.uppercontainer01}>
            <Image source={highHeel} />
          </View>

          <View style={styles.upperContainer02}>
            <Text style={styles.titleText}>하루, 이틀 그리고 힐링</Text>
          </View>
        </View>
      </View>
      


      <ScrollView style={styles.middleContainer}>
        <Text>Main content</Text>
      </ScrollView>



      <View style={styles.lowerContainer}>
        <TouchableOpacity style={styles.buttonStyle}>
          <View>
            <Text>홈</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle}>
          <View>
            <Text>하루1분</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle}>
          <View>
            <Text>글 귀</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle}>
          <View>
            <Text>메세지</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle} onPress={()=>{navigation.navigate('LoginPage')}}>
          <View>
            <Text>로그인</Text>
          </View>
        </TouchableOpacity>
      </View>
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
      backgroundColor : 'white'
     
  },
  
  upperContainer : {
      borderWidth : 1,
      height : 50,
      width : 410,
      flexDirection : "row",
      alignContent : "flex-start",
      backgroundColor : 'white'
      
  },
  
  uppercontainer01 : {
      
      borderWidth : 1,
      height : 50,
      width : 50,
      alignItems : "center",
      justifyContent : "center",
  },
  
  upperContainer02 : {
      
      borderWidth : 0,
      height : 50,
      width : 310,
      marginTop : 0,
  },

  titleText : {
      paddingTop : 20,
      fontSize : 20,
  },



  middleContainer : {
    borderWidth : 1,
    height : 330,
  },



  lowerContainer : {
    borderWidth : 1,
    flex : 1,
    flexDirection : 'row',
    justifyContent : 'space-around'
  },

  buttonStyle : {
    borderWidth : 1,
    height : 50,
    width : 60,
    borderRadius : 10,
    alignSelf : 'center',
    justifyContent : 'center',
    alignItems : 'center',
  }

})