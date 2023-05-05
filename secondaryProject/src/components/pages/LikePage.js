import * as Reaact from 'react';
import { firebase_db } from '../../../firebaseConfig';



const fetchData = async () => {
    const collectionRef =
    firebase_db.firestore().collection('like');
    const querySnapshot = await
    collectionRef.get();
    const documents =
    querySnapshot.docs.map(doc => doc.data());
    console.log(documents);
    }

    
    fetchData();
