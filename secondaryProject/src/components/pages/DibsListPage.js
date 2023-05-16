import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text, ScrollView} from 'react-native';
import { Provider } from 'react-native-paper';
import data from '../../../data.json'
import CateCard from '../form/CateCard';
import { firebase_db } from '../../../firebaseConfig';




export default function DibListPage() {
  
  const [stateMap,setStateMap] = useState([])
  const [cateState,setCateState] = useState([])
  //const [like, setLike] = useState([])
  const [index, setIndex] = React.useState(0);
  const [isLoading, setIsLoading] = useState(false);

  let like = data.like
 
  
  useEffect(()=>{

      firebase_db.ref('/like').once('value').then((snapshot)=>{
        console.log(snapshot)
        let like = snapshot.val();
       
        setStateMap(data.like)
        setCateState(data.like)
        
      })

      setIsLoading(true)
    
  },[])
 
  
 
 



  return (
    <Provider>
   
      
      <ScrollView >
        {
          
          isLoading && like.map(()=>{
            
           
            return(
              <View>
              <View>
                {like.title}
              </View>
              <View>
              {like.writer}
            </View>
            </View>
            )
          })
        }
      </ScrollView>



      
    </Provider>
  );
}