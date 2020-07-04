import { toast } from "react-toastify";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

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
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;

export const PRODUCTS_COLLECTION_NAME = "products";
export const ORDERS_COLLECTION_NAME = "orders";
export const USERS_COLLECTION_NAME = "users";

// signs in user using google acccount
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// signs out the user
export const signOut = () => auth.signOut();

// creates user profile document in firestore
export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = db.collection(USERS_COLLECTION_NAME).doc(user.uid);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { email, displayName, photoURL } = user;

    try {
      await userRef.set({
        email,
        displayName,
        photoURL,
        cart: {},
        ...additionalData,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return getUserDocument(user.uid);
};

// fetches user profile document from firestore
export const getUserDocument = async (uid) => {
  if (!uid) return null;

  try {
    const userDoc = await db.collection(USERS_COLLECTION_NAME).doc(uid).get();

    return {
      uid,
      ...userDoc.data(),
    };
  } catch (error) {
    console.log(error);
  }
};

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
    })
    .catch((error) => {
      toast.error("Some error occurred while fetching products");
      console.error("Error fetching products: ", error);
    });

  return products;
};

// save an order to orders collection
export const placeOrder = async (userInfo, cart) => {
  await db
    .collection(ORDERS_COLLECTION_NAME)
    .add({
      cart,
      userInfo,
    })
    .then((docRef) => {
      toast.success("Order Placed");
    })
    .catch((error) => {
      toast.error("Some error occurred while placing order");
      console.error("Error adding document: ", error);
    });
};
