import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {View, Text, TextInput, StyleSheet, ImageBackgroundComponent, Image, Modal, TouchableOpacity} from 'react-native';
import headerImage from '../../../assets/headerImage.jpg';
import highHeel from '../../../assets/highHeel.jpg';
import SignUpModal from '../modal/SignUpModal';
import {Ionicons, Feather, FontAwesome, AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';
import {Menu, Divider, Provider} from 'react-native-paper';
import MyStack from '../stacknavigator/StackNavigator';
import { createStackNavigator } from "@react-navigation/stack";

export default function LoginPage({navigation}) {

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true)
  };

  const closeMdoal = () => {
    setModalVisible(false)
  };


  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <View style={styles.upperContainer01}>
          <Image source={highHeel} />
        </View>

        <View style={styles.upperContainer02}>
          <Text style={styles.titleText}>하루, 이틀 그리고 힐링</Text>
        </View>
      </View>

      <View style={styles.middleContainer}>
        <View style={styles.subTitleContainer}>
          <Text style={styles.titleText}>Login</Text>
        </View>

        <View style={styles.signUpContainer}>
          <View style={styles.idPwContainer}>
            <Text style={styles.idPwText}>ID를 입력하세요</Text>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput style={styles.textInputStyle} />
          </View>
          <View style={styles.idPwContainer}>
            <Text style={styles.idPwText}>Pw를 입력하세요</Text>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput style={styles.textInputStyle} secureTextEntry />
          </View>

          <TouchableOpacity style={styles.signInContainer}>
            <Text>로그인</Text>
          </TouchableOpacity>

          <View style={styles.searchContainer}>
            <TouchableOpacity style={styles.searchIdpwContainer}>
              <Text>Id 찾기</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.searchIdpwContainer}>
              <Text>Pw 찾기</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.searchIdpwContainer}
              onPress={openModal}
            >
              <Text>회원가입</Text>

              <SignUpModal
                modalVisible={modalVisible}
                closeModal={closeMdoal}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.lowerContainer}>
        <TouchableOpacity style={styles.buttonStyle} onPress={()=>{navigation.navigate('MainPage')}}>
          <AntDesign name="home" size={17} color="black" />
          <Text>홈</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle}>
          <Ionicons name="time-outline" size={17} color="black" />
          <Text>하루1분</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle}>
          <Ionicons name="reader-outline" size={17} color="black" />
          <Text>글 귀</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle}>
          <MaterialCommunityIcons name="message-outline" size={17} color="black"/>
          <Text>메세지</Text>
        </TouchableOpacity>

        <TouchableOpacity disabled style={styles.buttonStyle}>
          <AntDesign name="login" size={17} color="black" />
          <Text>로그인</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({

container : {
    flex : 1,
    borderWidth : 1,
    backgroundColor : 'rgb(240,250,250)',    
},



upperContainer : {
  flexDirection : 'row',
  width : 410,
  borderWidth : 0,
  backgroundColor : 'white'
},

    upperContainer01 : {
      borderWidth : 0,
      width : 40,
      height : 40,
    },

    upperContainer02 : {
      borderWidth : 0,
      width : 370,
      justifyContent : 'space-evenly',
      paddingTop : 15,
      paddingLeft : 5,

    },

    titleText : {
      fontSize : 17,
    },




middleContainer : {
  borderWidth : 1,
  paddingTop : 0,
  height : 580,
  alignItems : 'center',
  justifyContent: 'center'
},

    subTitleContainer : {
      alignItems : 'center',
      marginTop : 10,
      marginBottom : 10,
    },


    signUpContainer : {
      height : 370,
      width : 300,
      borderWidth : 1,
      alignSelf : 'center',
      backgroundColor : 'white',
      borderRadius : 15,
    },

    idPwContainer : {
      justifyContent : 'center',
      height : 30,
      width : 250,
      marginLeft : 10,
      marginTop : 10,
    },

    idPwText : {
      fontSize : 15,
    },

    textInputContainer : {
      height : 40,
      width : 280,
      borderWidth : 1,
      marginTop : 10,
      marginLeft : 10,
      marginBottom : 0,
      borderRadius : 20,
    },

    searchContainer : {
      flexDirection : 'row',
      justifyContent : 'space-around',
      marginTop : 20,
    },

    searchIdpwContainer : {
      justifyContent : 'center',
      alignItems : 'center',
      borderWidth : 1,
      borderRadius : 20,
      height : 40,
      width : 80,
    },

    signInContainer : {
      justifyContent : 'center',
      alignItems : 'center',
      borderWidth : 1,
      borderRadius : 20,
      height : 40,
      width : 280,
      alignSelf : 'center',
      marginTop : 35,
    },

    textInputStyle: {
      alignSelf : "auto",
      paddingLeft : 10,
      paddingTop : 5,
    },


lowerContainer : {
  borderWidth : 0,
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
