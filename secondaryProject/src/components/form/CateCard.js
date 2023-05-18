import { Feather } from '@expo/vector-icons';
import * as React from 'react';
import { TouchableOpacity, View,  ScrollView, StyleSheet, share, Alert } from 'react-native';
import { Button,Avatar, Menu, Divider, Provider,Card, Text, FAB, Portal } from 'react-native-paper';
import LoadingPag from '../form/LoadingPage'
import {MyMenu} from '../form/LoadingPage'
import data from '../../../data.json';
import { BottomNavigation } from 'react-native-paper';
import { useState, useEffect } from 'react';
import { EvilIcons, Entypo } from '@expo/vector-icons';
import useShare from '../modal/UseShare';
import * as Application from 'expo-application';
import { firebase_db } from '../../../firebaseConfig';



const isIOS = Platform.OS === 'ios';



export default function cateCard({content}){




  const [tip, setTip] = useState()
useEffect(() => {
     firebase_db.ref('/tip/' + content.idx).once('value').then((snapshot) => {
        let tip = snapshot.val();
        setTip(tip)        
    })
}, [])
const like = async () => {
           
    let userUniqueId;
    if (isIOS) {
        let iosId = await Application.getIosIdForVendorAsync();
        userUniqueId = iosId
    } else {
        userUniqueId = await Application.androidId
    } console.log(userUniqueId)
    firebase_db.ref('/like/' + userUniqueId + '/' + tip.idx).set(tip, function (error) {
        console.log(error)
        Alert.alert("찜 완료!")
        
    });
}


  const share = useShare();

  const handleShare = () => {
    share({
      message:`${content.title}  \n\n ${content.desc} \n\n ${content.writer}`,
    });
  };



return(
  <View style={styles.cardContainer}>
              <Card>
                <Card.Title title={content.title} />
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={styles.cardImage} />
                <Card.Content>

                  <Text style={{paddingTop:10,}} variant="bodyMedium" numberOfLines={3}>{content.desc}</Text>
                  {/* <Text variant="bodyMedium">{content.data}</Text> */}
                  {/* <Text style={{}} variant="bodyMedium">{content.data}</Text> */}
                  <Text style={{alignSelf:'flex-end'}} variant="bodyMedium">{content.writer}</Text>
                  <View style={{flexDirection:'row'}}>
                  <TouchableOpacity style={styles.button} onPress={()=>like()}><Text style={styles.buttonText}>
                  <EvilIcons name="heart" size={15} color="black" />찜하기</Text></TouchableOpacity>
                    <TouchableOpacity style={{paddingLeft:10,}} onPress={handleShare}><Text style={styles.buttonText}>
                    <Entypo name="share" size={15} color="black" />
                      공유하기</Text></TouchableOpacity>
                    </View>
                </Card.Content>
                

              </Card>
              
            </View>
)}




const styles = StyleSheet.create({
  container : {
    height : 300,
    width : 400,
    borderWidth : 1,
    justifyContent : 'center',
    alignItems : 'center',
  },

  headerContainer : {
    borderWidth : 1,
    height : 150,
    width : 400,

  },

  upperContainer:{
    borderWidth : 1,
    height : 50,
    width : 400,
    flexDirection : 'row',
    justifyContent : 'flex-start',
    alignItems : 'center',
    },

    headerImage : {
      borderWidth : 1,
      height :50,
      width : 50,
      justifyContent : 'center',
      alignItems : 'center',
    },

    title : {
      borderWidth : 1,
      height : 50,
      width : 270,
      justifyContent : 'center',
      alignItems : 'center'
    },

    menu : {
      justifyContent : 'center',
      alignItems: 'center',
      paddingLeft : 5,
    },

    iconStyle : {
      marginTop : 0,
      paddingLeft : 10,
    },

    menuContainer : {
      height : 150,
      width : 100,
      color : 'rgb(219, 228, 230)'
    },

    cardContainer:{
      marginTop : 5,
      height : 400,
      width : 350,
      justifyContent : 'center',
      alignItems : 'center'
    },

    cardMain : {
      alignSelf : 'center'
    },

    cardImage:{
      width : 320,
      alignSelf : 'center'
    }
})