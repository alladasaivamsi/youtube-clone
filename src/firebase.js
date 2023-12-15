import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDya1FF1fx3Vw34BKCPHGiLQpf0ypTWcVU",
  authDomain: "clone-da2f4.firebaseapp.com",
  projectId: "clone-da2f4",
  storageBucket: "clone-da2f4.appspot.com",
  messagingSenderId: "70514379305",
  appId: "1:70514379305:web:48855737f927720d152a38",
};

firebase.initializeApp(firebaseConfig);
export default firebase.auth();
