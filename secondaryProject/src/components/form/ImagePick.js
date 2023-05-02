import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons';

export default function ImagePick() {

  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async()=>{
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === 'granted');

    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaType: ImagePicker.MediaTypeOptions.Images,
      allowEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    
    console.log(result);

    if(!result.canceled){
      setImage(result.uri);
    }

  };

  if(hasGalleryPermission === false){
    return <Text>No access to Internal Storage</Text>
  }

  

  return (
    <View style ={{flex:1, top: -25, alignItems: 'center'}} >
      <TouchableOpacity onPress={()=>pickImage()} style={{marginTop:30, flexDirection: 'row', justifyContent : 'center'}}>
      <Feather name="camera" size={24} color="black" style={{marginRight: 10,}}/>
        <Text>사진올리기</Text></TouchableOpacity>
        {image && <Image source={{uri: image}} style = {{ height : 200, width: 340}}/>}
    </View>
  )
}

