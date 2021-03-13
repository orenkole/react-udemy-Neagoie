import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore.collection("user");

firestore.collection("user").doc("KG0tZVm0Z6EHweTKuQUv")

firestore
  .collection("user")
  .doc("KG0tZVm0Z6EHweTKuQUv")
  .collection("cartItems")
  .doc("Mnr1toLkat3FrUaLnb7c")


firebase.doc("users/KG0tZVm0Z6EHweTKuQUv/cartItems/Mnr1toLkat3FrUaLnb7c")
