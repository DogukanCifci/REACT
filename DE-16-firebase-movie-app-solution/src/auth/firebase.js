import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

//asycn-await kullaniyorsak try catch kullanmaliyiz. HTa durumunda sikinti olmasin diye.Then kullansak basarili sonuc bekledigi icin kullanmamiza gerek yok.

//======TO CREATE NEW USER
export const createUser = async (email, password, displayName, navigate) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
      displayName
    );
    console.log(userCredential);
  } catch (error) {
    console.log(error.message);
  }
};

//=====TO LOGIN
export const signIn = async (email, password, navigate, displayName) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    navigate("/");
    console.log(userCredential);
  } catch (error) {
    console.log(error.message);
  }
};

//====TO Change User
export const userObserver = (setCurrentUser) => {
  //Kullanicinin signIn olup olmadigini kontrol etmek icin
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("hello", user);
      // setCurrentUser(user);
      const { email, displayName, photoURL } = user;
      setCurrentUser({ email, displayName, photoURL });
    } else {
      console.log("user logged out");
      setCurrentUser(false);
    }
  });
};
//====TO LOGOUT
export const logOut = () => {
  signOut(auth);
};
//=====GOOGLE ILE GIRIS YAPMAK ICIN
export const signInWithGoogle = (navigate) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      //console.log(name, email);
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
    });
};

//emale yeni sifre yollama
export const forgotPassword = (email) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("Please check your email");
    })
    .catch((error) => {
      console.log(error);
    });
};
