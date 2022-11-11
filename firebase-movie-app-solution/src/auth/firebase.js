import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.REACT_APP_apiKey,
  authDomain: process.REACT_APP_authDomain,
  projectId: process.REACT_APP_projectId,
  storageBucket: process.REACT_APP_storageBucket,
  messagingSenderId: process.REACT_APP_messagingSenderId,
  appId: process.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilPic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilPic", profilPic);
      console.log(result);
      //console.log(name, email);
    })
    .catch((error) => {
      console.log(error);
    });
};
