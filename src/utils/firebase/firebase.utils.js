// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// import {
//   getAuth,
//   signInWithRedirect,
//   signInWithPopup,
//   GoogleAuthProvider,
//   createUserWithEmailAndPassword,
// } from 'firebase/auth';
// import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyDb1yMPzYnpFEbcz8KJyTRCfRVr5gGkOjY',
//   authDomain: 'app1-910b1.firebaseapp.com',
//   projectId: 'app1-910b1',
//   storageBucket: 'app1-910b1.appspot.com',
//   messagingSenderId: '930031654465',
//   appId: '1:930031654465:web:a0806682385ee2795658c0',
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const provider = new GoogleAuthProvider();

// provider.setCustomParameters({
//   prompt: 'select_account',
// });

// export const auth = getAuth();
// export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// const db = getFirestore();
// export const createUserDocumentFromAuth = async (
//   userAuth,
//   additionalInformation = {}
// ) => {
//   if (!userAuth) return;
//   const userDocRef = doc(db, 'user', userAuth.uid);
//   console.log(userDocRef);
//   console.log('user doc ref', userDocRef);
//   const userSnapshot = await getDoc(userDocRef);

//   console.log('user sanpshot exist', userSnapshot.exists(), userAuth);

//   if (!userSnapshot.exists()) {
//     const { displayName, email } = userAuth;
//     const createdAt = new Date();

//     try {
//       await setDoc(userDocRef, {
//         displayName,
//         email,
//         createdAt,
//         ...additionalInformation,
//       });
//     } catch (error) {
//       console.log('error cretaing the users', error.message);
//     }
//   }
//   return userDocRef;
// };

// export const createAuthUserWithEmailAndPassword = async (email, password) => {
//   if (!email || !password) return;
//   return await createUserWithEmailAndPassword(auth, email, password);
// };

import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAKYobBakblEGZoU9TLTAtPyXEItZwicVE',
  authDomain: 'test-app2-16b42.firebaseapp.com',
  projectId: 'test-app2-16b42',
  storageBucket: 'test-app2-16b42.appspot.com',
  messagingSenderId: '177180948287',
  appId: '1:177180948287:web:6506771e32db08341ec58a',
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      if (error.message === 'auth/email-already-in-use') {
        alert('user with this email already exist');
      }
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
