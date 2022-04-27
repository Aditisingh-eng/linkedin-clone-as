import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAsqaJxcYO_12Gy5e8VPxYJQ5XlrqhAl7o",
  authDomain: "linkedin-clone-yt-ca49f.firebaseapp.com",
  projectId: "linkedin-clone-yt-ca49f",
  storageBucket: "linkedin-clone-yt-ca49f.appspot.com",
  messagingSenderId: "271366873983",
  appId: "1:271366873983:web:caff43fd4309558fca304a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
