import firebase from 'firebase/app'
import "firebase/auth"
export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBBJbI18DKrARn9dxDQEGDS6vIFchAUXbE",
    authDomain: "weconnect-a897a.firebaseapp.com",
    projectId: "weconnect-a897a",
    storageBucket: "weconnect-a897a.appspot.com",
    messagingSenderId: "616502367636",
    appId: "1:616502367636:web:6bd26efa26f22c7353ab81"
  }).auth();