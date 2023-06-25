import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDTXq0ofPWoGUVOg_JHtA4S6OPIyKaR5fk",
  authDomain: "netflix-clone-7401f.firebaseapp.com",
  projectId: "netflix-clone-7401f",
  storageBucket: "netflix-clone-7401f.appspot.com",
  messagingSenderId: "76545067428",
  appId: "1:76545067428:web:6c392c24dfc8ecb8c95931"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  const auth = firebase.auth()

  export {auth}
  export default db;