import React from "react";
import * as ImagePicker from "expo-image-picker";
import { View, Image, Button, useState } from "react-native";

 
const ImagePick = ({ url, onChangePhoto }) => {

 
  // photo 입력받는 button을 눌렀을 때 실행되는 함수
  const _handlePhotoBtnPress = async () => {
    // image library 접근에 대한 허가 필요 없음
    // ImagePicker를 이용해 Image형식의 파일을 가져온다
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });


 
    // cancelled가 아닐 때 가져온 사진의 주소로 onChangePhoto
    if (!result.canceled) {
      onChangePhoto(result.uri);
    }
  };
 
  return (
    <View>
      <Image source={{ uri: url }} />
      <Button title="Press" onPress={_handlePhotoBtnPress}/>
    </View>
  );
};
 
export default ImagePick;
