import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import MyStack from '../stacknavigator/StackNavigator';
import { createStackNavigator } from "@react-navigation/stack";

export default function BottomMenu({navigation}) {
  return (
    
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

    )
}

const styles = StyleSheet.create({
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
