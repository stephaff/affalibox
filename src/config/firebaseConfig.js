import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJ4aGKtn13bCg75eN_vJT7Wx6Z85D5RA8",
  authDomain: "affalibox.firebaseapp.com",
  projectId: "affalibox",
  storageBucket: "affalibox.appspot.com",
  messagingSenderId: "89773608968",
  appId: "1:89773608968:web:53b6e8129530cb2debc1bd"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;