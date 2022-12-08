import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDAYYlwOqzax34nP8z9UtTnymmoRIZBLZs",
  authDomain: "qwitter2-436b5.firebaseapp.com",
  projectId: "qwitter2-436b5",
  storageBucket: "qwitter2-436b5.appspot.com",
  messagingSenderId: "968973585878",
  appId: "1:968973585878:web:f8d0e40368233855e1e877"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// access firebase database with db variable
const db = firebase.firestore()

export default db
