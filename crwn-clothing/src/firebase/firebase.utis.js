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

  const collectionRef = firestore.collection("users");
  const collectionSnapshot = await collectionRef.get();
  collectionSnapshot.docs.map(doc => doc.data())

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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);
  const batch = firestore.batch()
  objectsToAdd.forEach(obj => {
    // get new doc reference with random Id
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  })
  // fire batch request and get promise
  // null - success
  return await batch.commit();
}

export const converCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(
    doc => {
      const {title, items} = doc.data();
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items,
      }
    }
  )

  // transform to final object form array:
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {})
}


firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
