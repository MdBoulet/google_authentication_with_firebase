import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBErFYPdhfrXhn6duqbTSxE3Xsl0atS5aM",
  authDomain: "redux-auth-b5cae.firebaseapp.com",
  projectId: "redux-auth-b5cae",
  storageBucket: "redux-auth-b5cae.appspot.com",
  messagingSenderId: "89190715104",
  appId: "1:89190715104:web:cd56032b2f6f229279ca85",
  measurementId: "G-7DW9CDP4KY"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();
