import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text, ScrollView} from 'react-native';
import { Provider } from 'react-native-paper';
import data from '../../../data.json'
import CateCard from '../form/CateCard';
import { firebase_db } from '../../../firebaseConfig';


export default function DibListPage() {
  
  const [stateMap,setStateMap] = useState([])
  const [cateState,setCateState] = useState([])

  const [index, setIndex] = React.useState(0);

  let like = data.like

  
  useEffect(()=>{

   
      firebase_db.ref('/like').once('value').then((snapshot)=>{
        console.log('파이어베이스에서 데이터 가져왔습니다!')
        let like = snapshot.val();
        setStateMap(data.like)
        setCateState(data.like)
      })
    
  },[like])
 

  return (
    <Provider>
   
      
      <ScrollView style={styles.middleContainer}>
        {
          like.map((content, i)=>{
            return(
              <Card content = {content} key = {i}/>
                
            )
          })
        }
      </ScrollView>

      
    </Provider>
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
      
      borderWidth : 0,
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
    borderWidth : 0,
    height : 330,
    alignSelf : 'center',
    width : 410,
    paddingLeft : 25,
   

  },



  lowerContainer : {
    borderWidth : 1,
    flex : 1,
    flexDirection : 'row',
    justifyContent : 'space-around',
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