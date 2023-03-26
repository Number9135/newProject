import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";


// 사용할 파이어베이스 서비스 주석을 해제합니다
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";
//import "firebase/compat/functions";
import "firebase/compat/storage";
import {apiKey, authDomain, detabaseURL, projectId, storageBucket, messagingSenderId, appId} from '../../../.env'


// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
  apiKey:  {apiKey},
  authDomain: {authDomain},
  detabaseURL : {detabaseURL},
  projectId: {projectId},
  storageBucket: {storageBucket},
  messagingSenderId: {messagingSenderId},
  appId: {appId},
};


//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}else{
  firebase.app();
}


export const firebase_db = initializeApp(firebaseConfig, 'secondaryProject')
