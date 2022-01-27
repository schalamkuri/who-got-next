// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
//import { getDatabase, ref, set } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//import Firebase from 'firebase';

//export default db;


import { initializeApp } from "firebase/app";
import { getDatabase, query, ref, set, onValue, push, orderByKey } from "firebase/database";
//import {ref} from "firebase/firestore"
//import * as firebase from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyAElBre4qKa90vmNxdFLDkdLqJuv7pfnrw",
    authDomain: "who-got-next-9eb2f.firebaseapp.com",
    databaseURL: "https://who-got-next-9eb2f-default-rtdb.firebaseio.com",
    projectId: "who-got-next-9eb2f",
    storageBucket: "who-got-next-9eb2f.appspot.com",
    messagingSenderId: "806281031505",
    appId: "1:806281031505:web:028c9a435cf9b6c92a2d70",
    measurementId: "G-2C2DBM3GZ6"
  };

  
  // Initialize Firebase
  //const app = initializeApp(firebaseConfig);
  const app = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);

  const db = getDatabase(app);

  export default db;