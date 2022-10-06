import React, { useState } from 'react';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils.js';
import SignUPForm from '../../components/sign-up-form/sign-up-form.component.js';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = createUserDocumentFromAuth(user);
    console.log(userDocRef);
    // console.log(response);
  };
  return (
    <div>
      <h1>Sign-In Page</h1>
      <button onClick={logGoogleUser}>Sign with goggle</button>
      <SignUPForm />
    </div>
  );
};

export default SignIn;
