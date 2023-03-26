import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React from 'react';
import {View, Text, TextInput, StyleSheet, ImageBackgroundComponent} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function LoginPage() {
  return (
    <View style = {styles.container}>

      <View style = {styles.headerContainer}>
      <Text style = {styles.headerText}>Login</Text>
      </View>

      <View style = {styles.mainContainer}>

        <View style = {styles.idpwContainer}>
          <Text style = {styles.textIdStyle}>ID</Text>
          <TextInput style ={styles.textInputStyle} placeholder = 'Id를 입력하세요.'/>
        </View>

        <View style = {styles.idpwContainer}>
          <Text style = {styles.textIdStyle}>PW</Text>
          <TextInput style ={styles.textInputStyle} placeholder = 'Id를 입력하세요.'/>
        </View>

        <View style = {styles.logInContainer}>
            <View style = {styles.signInContainer}>
              <TouchableOpacity style = {styles.loginButton}><Text>로그인</Text></TouchableOpacity>
           </View>

            <View style = {styles.signUpContainer}>
              <TouchableOpacity style = {styles.loginButton}><Text>회원가입</Text></TouchableOpacity>
            </View>
        </View>

      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    borderWidth : 1,
    justifyContent : "center",
    alignItems : 'center',
  },

  headerContainer : {
    borderWidth : 0,
  },

  headerText : {
    fontSize : 40,
  },

  mainContainer : {
    width : 300,
    height : 400,
    borderWidth : 1,
    marginTop : 20,
    borderRadius : 10,
  },

  idpwContainer : {
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : "center",
    paddingTop : 20,
  },

  textInputStyle : {
    backgroundColor : 'gray',
    height : 50,
    width : 250,
    marginLeft : 10,
  },

  textIdStyle : {
    fontSize : 20,
  },

  signInContainer : {
    height : 50,
    width : 80,
    borderWidth : 1,
    justifyContent : 'center',
    alignItems : 'center',
   
    
  },

  signUpContainer : {
    
      height : 50,
      width : 80,
      borderWidth : 1,
      justifyContent : 'center',
      alignItems : 'center',
      
  },

  logInContainer : {
    borderWidth : 1,
    flexDirection : 'row',
    justifyContent : 'space-around',
    marginTop : 180,
    
  }
})