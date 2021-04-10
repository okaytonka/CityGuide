import { firebase } from '@firebase/app';
require('firebase/auth')
import firestore from 'firebase/firestore';




const settings = { timestampsInSnapshots: true };

const config = {
    apiKey: "AIzaSyCYH_qrE9tyqsBPr55KVXvQq6YPlJHwwvg",
    authDomain: "cityguide-fe8e0.firebaseapp.com",
    projectId: "cityguide-fe8e0",
    storageBucket: "cityguide-fe8e0.appspot.com",
    messagingSenderId: "320671424900",
    appId: "1:320671424900:web:56831b30e7631fa89c7dd1",
    measurementId: "G-PZ11KE2JLX"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;