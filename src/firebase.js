import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAui9fjs71w8y8MQX-w0qYtxGyaOGQquBs",
  authDomain: "abn",
  projectId: "gymate",
  storageBucket: "gymate",
  messagingSenderId: "5151",
  appId: "5151",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
