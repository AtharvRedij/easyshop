import firebase from "firebase/app";
import "firebase/firestore";

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export default firebase;

export const PRODUCTS_COLLECTION_NAME = "products";
export const ORDERS_COLLECTION_NAME = "orders";

// fetches all products
export const getAllProducts = async () => {
  const products = {};

  await db
    .collection(PRODUCTS_COLLECTION_NAME)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        products[doc.id] = doc.data();
      });
    });

  return products;
};
