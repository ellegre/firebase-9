import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD77w9g6p5PU89o3FwOpp2SX4ofFgNcZV0",
  authDomain: "reading-list-app-d9bfe.firebaseapp.com",
  projectId: "reading-list-app-d9bfe",
  storageBucket: "reading-list-app-d9bfe.appspot.com",
  messagingSenderId: "772118535153",
  appId: "1:772118535153:web:62980c346c77982d33c250"
};

// init firebase
initializeApp(firebaseConfig)

// init firestore
const db = getFirestore()

// init firebase auth
const auth = getAuth()

export { db, auth }