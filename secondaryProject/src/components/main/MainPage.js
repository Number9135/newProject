import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import highHeel from '../../../assets/highHeel.jpg'
import {AntDesign} from '@expo/vector-icons';
import LoadingPage from '../form/LoadingPage';
import styles from '../../styles/MainPageStyles';
import MyStack from '../stacknavigator/StackNavigator';
import LoginPage from '../form/LoginPage';
import { createStackNavigator } from "@react-navigation/stack";
import { SliderBox } from 'react-native-image-slider-box';
import headerImage from '../../../assets/headerImage.jpg'
import { firebase_db } from '../auth/FirebaseConfig';
import {Ionicons, Feather, FontAwesome} from '@expo/vector-icons';



export default function MainPage({navigation}) {
    const [ready, setReady] = useState(true)
  useEffect(()=>{
      setTimeout(()=>{
          setReady(false)
      }, 3000)
  })


  return ready ? <LoadingPage/> :(


    <View style = {styles.container}>

        <View style = {styles.headerContainer}>

            <View style = {styles.headerImageContainer}>
                <Image source = {headerImage} style ={styles.headerImageStyle}/>
            </View>

            <View style = {styles.upperContainer}>

                <View style = {styles.uppercontainer01}>
                    <Image source = {highHeel}/>
                </View>

                <View style = {styles.upperContainer02}>
                    <Text style = {styles.headerText}>하루, 이틀 그리고 힐링</Text>
                </View>
            </View>

        </View>


        <View style = {styles.middleContainer}
            
        >

            {/* <SliderBox 
                autoplay = {true}
                circleLoop = {true}
                resizeMode = 'cover'
                images = {this.state.imageList}
                dotColor = 'rgba(0, 0, 0, 0)'
                inactiveDotColor = 'rgba(0, 0, 0, 0)'
                
                // ImageComponentStyle = {{width : wp('100%'), height : hp('30%')}}
                // currentImageEmitter = {(imageList) => 
                //         this.setState({currentIndex : index + 1})}
                    
            /> */}

                <View>
                     <Text style = {styles.middleText}>꿈을 이루고자 하는 용기만 있다면 모든 꿈을 이룰 수 있다.</Text>
                     <Text sytle = {styles.middleText01}>-월트 디즈니-</Text>
                </View>

        </View>

        

        <View style = {styles.lowerContainer}>
       
                

                <TouchableOpacity>
                    <View style = {styles.menuContainer}>
                    <Ionicons name = 'time-outline' size = {20} color = 'black'/>
                        <Text style = {styles.textStyle}>하루 1분</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style = {styles.menuContainer}>
                        <FontAwesome name = 'pencil' size = {20} color = 'black'/>
                        <Text style = {styles.textStyle}>글 귀</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{navigation.navigate('TestPage')}}>
                    <View style = {styles.menuContainer}>
                        <AntDesign name = 'message1' size={20} color = 'black'/>
                        <Text style = {styles.textStyle}>메세지</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={()=>{navigation.navigate('LoginPage')}}>
                    <View style = {styles.menuContainer}>
                        <Feather name = 'home' size = {20} color = 'black'/>
                        <Text style = {styles.textStyle}>로그인</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
   
  )
}
