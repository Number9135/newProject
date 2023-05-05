import React, { useEffect, useState } from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { Button,Avatar, Menu, Divider, Provider,Card, Text, FAB, Portal } from 'react-native-paper';
import data from '../../../data.json';
import { EvilIcons, Entypo } from '@expo/vector-icons';
import { firebase_db } from '../../../firebaseConfig';
import LikePage from '../pages/LikePage';
import {fetchData} from '../pages/LikePage'


export default function DibsListPage() {

   
  
 
    return (
    <View style ={{flex:1, borderWidth:1, paddingTop:50,}}>
    <Text>dibList:</Text>
      <View>{fetchData}</View>
    
    </View>
    );
    }

    
