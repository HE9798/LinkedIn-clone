import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDrL4L-hyLdGxUgK5Qne2jzVaS8PgmCngg",
    authDomain: "linkedin-clone-f47cf.firebaseapp.com",
    projectId: "linkedin-clone-f47cf",
    storageBucket: "linkedin-clone-f47cf.appspot.com",
    messagingSenderId: "194811055620",
    appId: "1:194811055620:web:7052f10d2d35123e59af51"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export { db, auth }