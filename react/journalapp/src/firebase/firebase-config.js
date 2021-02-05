import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA0uJHgQier-cfaTC-5venCBh3yFKryzek",
    authDomain: "cursos-236a9.firebaseapp.com",
    projectId: "cursos-236a9",
    storageBucket: "cursos-236a9.appspot.com",
    messagingSenderId: "515672078235",
    appId: "1:515672078235:web:20e95a99c78e90808b133e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


  export{
      db,
      googleAuthProvider,
      firebase
  }