// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD3qDsMHtV2y38o_kBQV0JGgx16Q1zQg4Y',
  authDomain: 'e-com-db-77996.firebaseapp.com',
  projectId: 'e-com-db-77996',
  storageBucket: 'e-com-db-77996.appspot.com',
  messagingSenderId: '527066574818',
  appId: '1:527066574818:web:4319ca91600431acb953bb',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const provider = new GoogleAuthProvider();

// provider.setCustomParameters({
//   prompt: 'select_account',
// });

// export const auth = getAuth();
// export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);

  console.log(userDocRef, userSnapshot.exists(), userAuth);

  if (userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error cretaing the users', error.message);
    }
  }
  return userDocRef;
};