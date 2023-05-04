import React from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { Button,Avatar, Menu, Divider, Provider,Card, Text, FAB, Portal } from 'react-native-paper';
import data from '../../../data.json';
import { EvilIcons, Entypo } from '@expo/vector-icons';


export default function DibsListPage(content) {
  return (

    <View style = {{flex:1, borderWidth:1, justifyContent:'center', alignItems:'center'}}>

        <ScrollView style={{borderWidth:1, width:400, }}>
        
        <View style={{borderWidth: 1, borderRadius:20, height: 200, width: 380, marginTop: 10, alignSelf:'center'}}>

        </View>

        </ScrollView>
       
    </View>

    )
}
