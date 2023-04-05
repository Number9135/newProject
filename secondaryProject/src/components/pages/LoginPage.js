import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {View, Text, TextInput, StyleSheet, ImageBackgroundComponent, Image, Modal, TouchableOpacity} from 'react-native';
import styles from '../../styles/LoginPageStyles';
import headerImage from '../../../assets/headerImage.jpg';
import highHeel from '../../../assets/highHeel.jpg';
import SignUpModal from '../modal/SignUpModal';
import MyStack from '../stacknavigator/StackNavigator';


export default function LoginPage() {

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true)
  };

  const closeMdoal = () => {
    setModalVisible(false)
  };


  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerImageContainer}>
          <Image source={headerImage} style={styles.headerImageStyle} />
        </View>

        <View style={styles.headerContainer01}>
          <View style={styles.headerIconContainer}>
            <Image source={highHeel} />
          </View>

          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitleText}>하루, 이틀 그리고 힐링</Text>
          </View>
        </View>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Login</Text>
      </View>

      <View style={styles.mainContainer}>
        <View style={styles.idPwContainer}>
          <Text style={styles.idPwText}>ID를 입력하세요</Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput style={styles.textInputStyle} />
        </View>
        <View style={styles.idPwContainer}>
          <Text style={styles.idPwText}>Pw를 입력하세요</Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput style={styles.textInputStyle} secureTextEntry />
        </View>

        <View style={styles.signInContainer}>
          <TouchableOpacity>
            <Text>로그인</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchIdpwContainer}>
            <TouchableOpacity>
              <Text>Id 찾기</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.searchIdpwContainer}>
            <TouchableOpacity>
              <Text>Pw 찾기</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.searchIdpwContainer}>
            <TouchableOpacity onPress={openModal}>
              <Text>회원가입</Text>
            </TouchableOpacity>
            <SignUpModal modalVisible={modalVisible} closeModal={closeMdoal} />
          </View>
        </View>
      </View>
    </View>
  );
}
