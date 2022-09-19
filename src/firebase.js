import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyB5xj0h-Tm-kvsYGVDQrv-J3uqCHQIjqq8",
    authDomain: "ecommerce-elian-castro.firebaseapp.com",
    projectId: "ecommerce-elian-castro",
    storageBucket: "ecommerce-elian-castro.appspot.com",
    messagingSenderId: "57663032027",
    appId: "1:57663032027:web:90f17c2771a08650815afe"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth, db };
