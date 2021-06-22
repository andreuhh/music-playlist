import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBbB4pwGvH4Q9CqU9d2u8P7cJdlvbvrbzI",
    authDomain: "vue-music-playlist-8833f.firebaseapp.com",
    projectId: "vue-music-playlist-8833f",
    storageBucket: "vue-music-playlist-8833f.appspot.com",
    messagingSenderId: "826675560641",
    appId: "1:826675560641:web:df815921ec7b0874f95440"
  };

// init firebase 
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectFirestore, projectAuth, projectStorage, timestamp, }