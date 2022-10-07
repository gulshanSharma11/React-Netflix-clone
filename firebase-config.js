
import { initializeApp } from "firebase/app";

import { getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBu3QOQOvvlzZ8xVbUr9O-SwR6OUBJVHIE",
  authDomain: "react-netflix-clone-efee1.firebaseapp.com",
  projectId: "react-netflix-clone-efee1",
  storageBucket: "react-netflix-clone-efee1.appspot.com",
  messagingSenderId: "487649695863",
  appId: "1:487649695863:web:f28125a5e2557714a8ce72",
  measurementId: "G-Q53G67M85N"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth= getAuth(app);