import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import {Button} from 'react-native-paper';
import writingImage from '../../../assets/writingImage.jpg';
import { TextInput } from 'react-native-paper';
import ImagePick from '../form/ImagePick';
import MainPage from '../main/MainPage';
import MyStack from '../stacknavigator/StackNavigator';
import { useNavigation } from '@react-navigation/native';



export default function WritingPage(){

    const [writeMode, setWriteMode] = useState(false)

    const [asseyMode, setAsseyMode] = useState(false)

    const [titleText, setTitleText] = useState("");

    const [contentText, setContentText] = useState("");

    const [writerText, setWriterText] = useState("");

    const navigation = useNavigation();


    if (writeMode) {
      return (
        <View style={{borderWidth:1, flex:1,}}>
          <View style={{
              justifyContent:'center', 
              alignItems:'center', 
              marginTop:0, 
              paddingLeft: 0, 
              flexDirection:'row', 
              justifyContent:'space-between', 
              height:40, 
              width:410, 
              borderWidth : 1,
              backgroundColor:'gray',
              opacity:0.5}}>
            
            <TouchableOpacity style={{
              justifyContent:'center', 
              alignItems:'center',
              height:30, 
              width:50,
              marginLeft:10,
              }} 
              onPress={()=>setWriteMode(false)}>
              <Text style={{
                fontSize:15,
                fontWeight:'bold'}}>저장</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
              justifyContent:'center', 
              alignItems:'center',
              height:30, 
              width:50,
              marginRight:10,
              }} 
              onPress={()=>setWriteMode(false)}>
            <Text style={{
                fontSize:15,
                fontWeight:'bold'}}>취소</Text>
            </TouchableOpacity>
          </View>

          <View style={{justifyContent:'center', alignItems: 'center', height: 560,}}>
            <View style={{borderWidth: 1, height: 550, width: 380, alignItems:'center', justifyContent:'center', backgroundColor:'lavenderblush', opacity:0.9}}>
            <TextInput style={{height: 50, width: 350, borderWidth:1, marginTop : 0, backgroundColor:'lightgray', opacity:0.7}}
              placeholder='주제를 입력하세요'
              value={titleText}
              onChangeText={text => setTitleText(text)}
              type = 'focused'
            />
            <View style={{height:240, borderWidth:1, width:350, marginTop:5,}}>
            
              <ImagePick/>
            </View>

            <TextInput style={{borderWidth: 1, marginTop: 5, height: 160, width: 350, backgroundColor:'lightgray', opacity:0.7}}
              
              value={contentText}
              onChangeText={text => setContentText(text)}
              placeholder='내용을 입력하세요'
    />

            <TextInput style={{borderWidth: 1, marginTop: 5, height: 50, width: 350, backgroundColor:'lightgray', opacity:0.7}}
              placeholder = '저자를 입력하세요'
              value={writerText}
              onChangeText={text => setWriterText(text)}
              
            />
            </View>
          </View>
        </View>
      );
    }else if(asseyMode){
        return (
          <View style={{borderWidth:1, flex:1,}}>
          <View style={{
              justifyContent:'center', 
              alignItems:'center', 
              marginTop:0, 
              paddingLeft: 0, 
              flexDirection:'row', 
              justifyContent:'space-between', 
              height:40, 
              width:410, 
              borderWidth : 1,
              backgroundColor:'gray',
              opacity:0.5}}>
            
            <TouchableOpacity style={{
              justifyContent:'center', 
              alignItems:'center',
              height:30, 
              width:50,
              marginLeft:10,
              }} 
              onPress={()=>setWriteMode(false)}>
              <Text style={{
                fontSize:15,
                fontWeight:'bold'}}>저장</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
              justifyContent:'center', 
              alignItems:'center',
              height:30, 
              width:50,
              marginRight:10,
              }} 
              onPress={()=>setAsseyMode(false)}>
            <Text style={{
                fontSize:15,
                fontWeight:'bold'}}>취소</Text>
            </TouchableOpacity>
          </View>

          <View style={{justifyContent:'center', alignItems: 'center', height: 560,}}>
            <View style={{borderWidth: 1, height: 550, width: 380, alignItems:'center', justifyContent:'center', backgroundColor:'lavenderblush', opacity:0.9}}>
            <TextInput style={{height: 50, width: 350, borderWidth:1, marginTop : 0, backgroundColor:'lightgray', opacity:0.7}}
              placeholder='주제를 입력하세요'
              value={titleText}
              onChangeText={text => setTitleText(text)}
              type = 'focused'
            />
            <View style={{height:240, borderWidth:1, width:350, marginTop:5,}}>
            
              <ImagePick/>
            </View>

            <TextInput style={{borderWidth: 1, marginTop: 5, height: 160, width: 350, backgroundColor:'lightgray', opacity:0.7}}
              
              value={contentText}
              onChangeText={text => setContentText(text)}
              placeholder='내용을 입력하세요'
    />

            <TextInput style={{borderWidth: 1, marginTop: 5, height: 50, width: 350, backgroundColor:'lightgray', opacity:0.7}}
              placeholder = '저자를 입력하세요'
              value={writerText}
              onChangeText={text => setWriterText(text)}
              
            />
            </View>
          </View>
        </View>
          );
    }

    return (
      <View style={{flex:1, borderWidth:1, justifyContent:'center', alignItems:'center'}}>


        <View style = {styles.upperContainer}>
        {/* <Image style={styles.imageStyle} source={writingImage} resizeMode='contain' /> */}
        <SimpleLineIcons name="note" size={150} color="black" />
        </View>


        <View style = {styles.middleContainer}>

          <TouchableOpacity style={styles.buttonStyle} onPress={()=>setWriteMode(true)}>
            <Text>하루1분</Text>
          </TouchableOpacity>
        
          <TouchableOpacity style={styles.buttonStyle} onPress={()=>setAsseyMode(true)}>
            <Text>글 귀</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonStyle} onPress={()=>navigation.navigate("MainPage")}>
            <Text>돌아가기</Text>
          </TouchableOpacity>

          </View>

      </View>
    );

}


const styles = StyleSheet.create({
  buttonStyle:{
    borderWidth : 0,
    height : 50,
    width : 300,
    borderRadius : 40,
    justifyContent : 'center',
    alignItems : 'center',
    marginTop : 20,

    backgroundColor : 'lightgray',
    opacity : 1,
    shadowColor: 'gray',
    shadowOpacity : 0.7,
    shadowOffset :{
      height : 10
  },
  },

  upperContainer : {
    flex: 0.7,
    borderWidth : 0,
    width : 400,
    justifyContent : 'center',
    alignItems: 'center',
    marginTop : 10,
  },


  middleContainer : {
    flex:1,
    borderTopWidth : 1,
   borderWidth : 0,
    width : 400,
    justifyContent : 'center',
    alignItems : 'center',
    height : 400,
    paddingTop : 20, 
  },

  imageStyle : {
    height : 300,
    borderWidth : 0,
    width : 400,
  }
})