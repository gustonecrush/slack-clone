import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Add Firebase storage
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDB0Iv3dONNhuMCAjWFildrkzc2gnsAFwo",
    authDomain: "slack-clone-506ea.firebaseapp.com",
    projectId: "slack-clone-506ea",
    storageBucket: "slack-clone-506ea.appspot.com",
    messagingSenderId: "727494201490",
    appId: "1:727494201490:web:5f236f924338067b51d64b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;