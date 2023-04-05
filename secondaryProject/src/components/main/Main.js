import * as React from 'react';
import { BottomNavigation, Text, SafeAreaContex, View } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
// import OnedayPage from '../form/OnedayPage';
import HomePage from '../pages/HomePage';
import { useState, useEffect } from 'react';
import LoadingPage from '../pages/LoadingPage';
import LoginPage from '../pages/LoginPage';
import MainCard from '../form/MainCard';


const HomRoute = () => <Text><HomePage/></Text>

const OnedayRoute = () => <Text></Text>;

const AsseyRoute = () => <Text>Albums</Text>;

const MessageRoute = () => <Text><MainCard/></Text>;

const SigninRoute = () => <Text><LoginPage/></Text>;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: '홈', focusedIcon: 'home'},
    { key: 'oneday', title: '하루1분', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'assey', title: '글 귀', focusedIcon: 'note-edit-outline' },
    { key: 'message', title: '메세지', focusedIcon: 'message' },
    { key: 'signin', title: '로그인', focusedIcon: 'login',  },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomRoute,
    oneday: OnedayRoute,
    assey: AsseyRoute,
    message: MessageRoute,
    signin: SigninRoute,
  });


  const [ready, setReady] = React.useState(true)

  React.useEffect(()=>{
    setTimeout(()=>{
      setReady(false)
    }, 3000)
  })

  return ready ? <LoadingPage/> : (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MyComponent;