import firebase from 'firebase/app'
import 'firebase/firebase-firestore'
import 'firebase/firebase-database'

var config = {
    apiKey: "AIzaSyAjOCQaZV37oFmZTx7Ufxa7JQnlq6MtefI",
    authDomain: "collegehandbook074.firebaseapp.com",
    databaseURL: "https://collegehandbook074.firebaseio.com",
    projectId: "collegehandbook074",
    storageBucket: "collegehandbook074.appspot.com",
    messagingSenderId: "599963994411"
  };


firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots:true});

export default firebase;