import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {View, Text, TextInput, StyleSheet, ImageBackgroundComponent, Image, Modal, TouchableOpacity} from 'react-native';
import headerImage from '../../../assets/headerImage.jpg';
import highHeel from '../../../assets/highHeel.jpg';
import SignUpModal from '../modal/SignUpModal';
import {Ionicons, Feather, FontAwesome} from '@expo/vector-icons';
import {Menu, Divider, Provider} from 'react-native-paper';
import BottomMenu from '../form/BottomMenu';
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

            <View style={styles.signInContainer}>
              <TouchableOpacity>
                <Text>로그인</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.searchContainer}>
              <View style={styles.searchIdpwContainer}>
                <TouchableOpacity>
                  <Text>Id 찾기</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.searchIdpwContainer}>
                <TouchableOpacity>
                  <Text>Pw 찾기</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.searchIdpwContainer}>
                <TouchableOpacity onPress={openModal}>
                  <Text>회원가입</Text>
                </TouchableOpacity>
                <SignUpModal
                  modalVisible={modalVisible}
                  closeModal={closeMdoal}
                />
              </View>
            </View>
          </View>
        
      </View>

      <View style={styles.lowerContainer}>
        <BottomMenu />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({

container : {
    flex : 1,
    borderWidth : 1,
    backgroundColor : 'rgb(220,210,225)',    
},



upperContainer : {
  flexDirection : 'row',
  width : 410,
  borderWidth : 1,
  backgroundColor : 'white'
},

    upperContainer01 : {
      borderWidth : 1,
      width : 40,
      height : 40,
    },

    upperContainer02 : {
      borderWidth : 1,
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
  paddingTop : 15,
  height : 500,
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
  height : 60,
},






  


    



    
})
