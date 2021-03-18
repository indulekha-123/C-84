import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBz7AzK_9jvDUfkyA0G7ZxUe6174uaFxlc",
  authDomain: "book-santa-2-43877.firebaseapp.com",
  projectId: "book-santa-2-43877",
  storageBucket: "book-santa-2-43877.appspot.com",
  messagingSenderId: "682805901966",
  appId: "1:682805901966:web:2cb70cce2c2c1dabc127df"
};

  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();