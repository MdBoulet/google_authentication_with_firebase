import React, { useState } from 'react';
import './App.css';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser, selectEmail, selectName, selectPhoto, signInUser } from './features/userSlice';


const App = () => {

  const name = useSelector(selectName);
  const email = useSelector(selectEmail);
  const photo = useSelector(selectPhoto);

  const dispatch = useDispatch();

  const handleSignIn = () => {
    signInWithPopup(auth, provider).then((results) => {
      dispatch(signInUser({
        displayName: results.user.displayName,
        email: results.user.email,
        photo: results.user.photoURL
      }))
    }).catch((error) => {
      console.log(error);
    })
  }

  const handleSignOut = () => {
    auth.signOut().then(() => {
      dispatch(logOutUser());
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <div className='app'>
      {
        name ? <div className="login">
        <img src={photo} alt="" />
        <h3>{name}</h3>
        <h3>{email}</h3>
        <div className="btn">
          <button onClick={handleSignOut}>
            <img src="google.png" alt="" />
            <p>Sign Out</p>
          </button>
        </div>
      </div> : <div className="btn">
        <button onClick={handleSignIn}>
          <img src="google.png" alt="" />
          <p>Sign In With Google</p>
        </button>
      </div>
      }
    </div>
  )
}

export default App
