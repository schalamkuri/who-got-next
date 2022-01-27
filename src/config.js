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
const firebaseConfig = {
    apiKey: "YOUR-API-KEY",
    authDomain: "YOUR-DOMAIN",
    databaseURL: "YOUR-URL",
    projectId: "YOUR-ID",
    storageBucket: "YOUR-STORAGE-BUCKET",
    messagingSenderId: "YOUR-SENDER-ID",
    appId: "YOUR-APP-ID",
    measurementId: "YOUR-MEASUREMENT-ID"
  };

  
  // Initialize Firebase
  //const app = initializeApp(firebaseConfig);
  const app = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);

  const db = getDatabase(app);

  export default db;
