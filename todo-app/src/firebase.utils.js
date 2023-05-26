import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// / For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//   // Your Firebase configuration
//   apiKey: "AIzaSyC6evkH3S1Tli3ql25_6sK4wgKtkk30vSk",
//   authDomain: "todo-app1-c7fdb.firebaseapp.com",
//   projectId: "todo-app1-c7fdb",
//   storageBucket: "todo-app1-c7fdb.appspot.com",
//   messagingSenderId: "587905145942",
//   appId: "1:587905145942:web:6b3a1fb15e34c79eb7eff7",
//   measurementId: "G-HNMNG2LFSF",
// };

const firebaseConfig = {
  apiKey: "AIzaSyBRYMKENsfy76zw6KiQVSm3B-QQr_BYrwc",
  authDomain: "todoapp-42847.firebaseapp.com",
  projectId: "todoapp-42847",
  storageBucket: "todoapp-42847.appspot.com",
  messagingSenderId: "581558217454",
  appId: "1:581558217454:web:a30fb7472d6609a71721ff",
  measurementId: "G-T233DY3NCW",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
let db = getFirestore(app);

export { db };
