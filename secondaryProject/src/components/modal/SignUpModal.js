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
    <Modal visible={modalVisible} animationType="slide" transparent={true}>
      
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
         
            <TouchableOpacity style = {styles.signUpBackStyle} disabled={notAllow}>
              <Text>회원가입</Text>
            </TouchableOpacity>
         
          
            <TouchableOpacity style = {styles.signUpBackStyle} onPress={closeModal}>
              <Text>돌아가기</Text>
            </TouchableOpacity>
          
        </View>
      </View>
     
    
    </Modal>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    height: 450,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    alignSelf: "center",
    marginTop: 150,
    borderRadius: 20,
    backgroundColor: "rgb(220,210,210)",
    opacity: 4,
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
    width : 200,
    marginLeft : 0,
    marginTop : 5,
},

idPwText : {
    fontSize : 15,
},

textInputContainer : {
    height : 40,
    width : 200,
    borderWidth : 1,
    marginTop : 3,
    marginLeft : 0,
    marginBottom : 0,
    borderRadius : 20,
    paddingLeft : 20,
    paddingTop : 5,
},

lowerContainer : {
  flexDirection : 'row',
  marginTop : 3,
  justifyContent : 'space-between',
  height : 70,
  width : 200,
  borderWidth :0,
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
