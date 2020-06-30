import firebase from 'firebase' 
import firestore from 'firebase/firestore'

var config = {
    apiKey: "AIzaSyAo1azlRI9dv-heeDpxJCNngfJGZAXlgzU",
    authDomain: "ninja-smoothies-42.firebaseapp.com",
    databaseURL: "https://ninja-smoothies-42.firebaseio.com",
    projectId: "ninja-smoothies-42",
    storageBucket: "ninja-smoothies-42.appspot.com",
    messagingSenderId: "1046871094438"
  };
  
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true})

export default firebaseApp.firestore()