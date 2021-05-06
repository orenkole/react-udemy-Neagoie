import { converCollectionsSnapshotToMap, firestore } from "../../firebase/firebase.utis";
import ShopActionTypes from "./shop.types";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
})

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
})

export const fetchCollectionsFailure = errorMassage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMassage,
})

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections");

    dispatch(fetchCollectionsStart())

    collectionRef.get()
    .then(
      (snapshot) => {
        const collectionsMap = converCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap))
        this.setState({ loading: false })
      }
    )
    .catch(error => dispatch(fetchCollectionsFailure(error.message)))
  }
}