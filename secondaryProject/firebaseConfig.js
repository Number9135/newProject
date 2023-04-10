import firebase from "firebase/compat/app"; 

// 사용할 파이어베이스 서비스 주석을 해제합니다 
//import "firebase/compat/auth"; 
import "firebase/compat/database"; 
//import "firebase/compat/firestore"; 
//import "firebase/compat/functions"; 

import "firebase/compat/storage";  

const firebaseConfig = {   
        apiKey: "AIzaSyBpMQcbPOHB905DF5opLMlYx1L4mQCRRck",
        authDomain: "secondaryproject-e93fe.firebaseapp.com",
        databaseURL: "https://secondaryproject-e93fe-default-rtdb.firebaseio.com",
        projectId: "secondaryproject-e93fe",
        databaseURL: 'https://secondaryproject-e93fe-default-rtdb.firebaseio.com/',
        storageBucket: "secondaryproject-e93fe.appspot.com",
        messagingSenderId: "801070879028",
        appId: "1:801070879028:web:dbb4f4faa39b09a6449561",   
   };  
    
    if (!firebase.apps.length) 
    {firebase.initializeApp(firebaseConfig);}  
    
    export const firebase_db = firebase.database()