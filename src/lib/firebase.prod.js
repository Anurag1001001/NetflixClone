import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD38QQRXDtb59zAy-Tyom5MCs8k65TaDDs",
  authDomain: "netflix-19f2a.firebaseapp.com",
  databaseURL: "https://netflix-19f2a.firebaseio.com/",
  projectId: "netflix-19f2a",
  storageBucket: "netflix-19f2a.appspot.com",
  messagingSenderId: "542613313204",
  appId: "1:542613313204:web:f790ba0aa01337d88729e1",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
