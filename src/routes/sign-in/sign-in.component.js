import React from 'react';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils.js';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = createUserDocumentFromAuth(user);
    console.log(userDocRef);
    // console.log(response);
  };
  return <div onClick={logGoogleUser}>Sign-In</div>;
};

export default SignIn;
