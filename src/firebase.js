import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA_8SLO-DWs7Lx5CYd8SwuG5GH3r4YjsVY",
  authDomain: "web-prog-proj.firebaseapp.com",
  projectId: "web-prog-proj",
  storageBucket: "web-prog-proj.appspot.com",
  messagingSenderId: "801467687313",
  appId: "1:801467687313:web:01ddceddc5f72d68b53a30",
  measurementId: "G-4BP24GGHNR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };