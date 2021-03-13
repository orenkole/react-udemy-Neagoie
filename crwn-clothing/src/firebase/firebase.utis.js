import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC4gkcJErVMa6_X-b3NF5yQSh58ytCmcms",
  authDomain: "crown-db-2021.firebaseapp.com",
  projectId: "crown-db-2021",
  storageBucket: "crown-db-2021.appspot.com",
  messagingSenderId: "74647325799",
  appId: "1:74647325799:web:83f9bb06e4f761e1d518c2",
  measurementId: "G-1Z8ZWS65WK"
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
