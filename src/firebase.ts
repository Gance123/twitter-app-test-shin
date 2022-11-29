import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcTEgZBpgIu4yVUCkypmDHnaYcXKkU7uk",
  authDomain: "twitter-test-shin.firebaseapp.com",
  projectId: "twitter-test-shin",
  storageBucket: "twitter-test-shin.appspot.com",
  messagingSenderId: "591979927639",
  appId: "1:591979927639:web:999acb4ac5c80700deeb12",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export { db, auth, provider };
