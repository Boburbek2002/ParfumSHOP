import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAObh8fXd6bkcHWBKzwA8nMRf6qZEzjG0c",
  authDomain: "e-commer-c476e.firebaseapp.com",
  projectId: "e-commer-c476e",
  storageBucket: "e-commer-c476e.appspot.com",
  messagingSenderId: "510228778135",
  appId: "1:510228778135:web:2261a27184396df400edd2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
