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






export default function dibList({content}){




  const [dib, setDib] = useState({
    "idx": 9,
    "category": "재테크",
    "title": "렌탈 서비스 금액 비교해보기",
    "image": "https://storage.googleapis.com/sparta-image.appspot.com/lecture/money1.png",
    "desc": "요즘은 정수기, 공기 청정기, 자동차나 장난감 등 다양한 대여서비스가 활발합니다. 사는 것보다 경제적이라고 생각해 렌탈 서비스를 이용하는 분들이 늘어나고 있는데요. 다만, 이런 렌탈 서비스 이용이 하나둘 늘어나다 보면 그 금액은 겉잡을 수 없이 불어나게 됩니다. 특히, 렌탈 서비스는 빌려주는 물건의 관리비용까지 포함된 것이기에 생각만큼 저렴하지 않습니다. 직접 관리하며 사용할 수 있는 물건이 있는지 살펴보고, 렌탈 서비스 항목에서 제외해보세요. 렌탈 비용과 구매 비용, 관리 비용을 여러모로 비교해보고 고민해보는 것이 좋습니다. ",
    "date": "2020.09.09"
})
useEffect(() => {
     firebase_db.ref('/like/' + content.idx).once('value').then((snapshot) => {
        let dib = snapshot.val();
        setDib(dib)        
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