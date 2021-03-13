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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  console.log("USER REF: ", userRef)
  const snapShot = await userRef.get();
  console.log("SNAPSHOT: ", snapShot);

  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
