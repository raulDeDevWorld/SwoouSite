import { initializeApp } from "firebase/app";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvGFL3tWeExENHwUS_rsH6M0lz5aki20Q",
  authDomain: "swoou-site.firebaseapp.com",
  databaseURL: "https://swoou-site-default-rtdb.firebaseio.com",
  projectId: "swoou-site",
  storageBucket: "swoou-site.appspot.com",
  messagingSenderId: "611081499032",
  appId: "1:611081499032:web:0fa61a6b2fb4983b193bed"
};

export const app = initializeApp(firebaseConfig);
