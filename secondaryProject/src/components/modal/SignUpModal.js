import React, { useEffect, useState } from "react";
import { View, SafeAreaView,
  Text, 
  Modal,
  KeyboardAvoidingView,
  Button, 
  StyleSheet,
  TextInput, 
  TouchableOpacity, 
  Platform,
  Keyboard} from "react-native";
import { TouchableWithoutFeedback } from "react-native";

export default function SignUpModal({ modalVisible, closeModal }) {

  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [comfirmPw, setComfirmPw] = useState('')
  const [notAllow, setNotAllow] = useState(true)

  useEffect(()=>{
    if(name && id && pw && comfirmPw){
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [name, id, pw, comfirmPw])




  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding': 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <Modal visible={modalVisible} animationType="slide">
      
      <View style={styles.modalContainer}>
        <View>
          <Text style = {styles.textTitle}>회원가입</Text>
        </View>

        <View style={styles.idPwContainer}>
          <Text style={styles.idPwText}>이름을 입력하세요</Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput value={name} style={styles.textInputStyle} onChange={setName} />
        </View>

        <View style={styles.idPwContainer}>
          <Text style={styles.idPwText}>ID를 입력하세요</Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput value={id} style={styles.textInputStyle} onChange={setId} />
        </View>
        <View style={styles.idPwContainer}>
          <Text style={styles.idPwText}>Pw를 입력하세요</Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput value={pw} style={styles.textInputStyle} secureTextEntry onChange={setPw} />
        </View>

        <View style={styles.idPwContainer}>
          <Text style={styles.idPwText}>2차 pw를 입력하세요</Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput value={comfirmPw} style={styles.textInputStyle} secureTextEntry onChange={setComfirmPw} />
        </View>

        

        <View style = {styles.lowerContainer}>
          <View style = {styles.signUpBackStyle}>
            <TouchableOpacity disabled={notAllow}>
              <Text>회원가입</Text>
            </TouchableOpacity>
          </View>
          <View style = {styles.signUpBackStyle}>
            <TouchableOpacity onPress={closeModal}>
              <Text>돌아가기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
     
    
    </Modal>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    height: 550,
    width: 350,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    alignSelf: "center",
    marginTop: 50,
    borderRadius: 20,
    backgroundColor: "rgb(220,210,210)",
    opacity: 0.8,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowRadius: 3,
    elevation: 15,
  },

  idPwContainer : {
    justifyContent : 'center',
    height : 30,
    width : 250,
    marginLeft : 10,
    marginTop : 10,
},

idPwText : {
    fontSize : 15,
},

textInputContainer : {
    height : 40,
    width : 280,
    borderWidth : 1,
    marginTop : 10,
    marginLeft : 10,
    marginBottom : 0,
    borderRadius : 20,
    paddingLeft : 20,
    paddingTop : 5,
},

lowerContainer : {
  flexDirection : 'row',
  marginTop : 10,
  justifyContent : 'space-between',
  height : 70,
  width : 250,
},

signUpBackStyle : {
  borderWidth : 1,
  height : 40,
  width : 80,
  borderRadius : 20,
  alignItems : "center",
  justifyContent : "center",
  alignSelf : 'center'
},

textTitle:{
  fontSize : 30,
}

});
