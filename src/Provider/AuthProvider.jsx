import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase.config';
// import { useNavigate } from 'react-router';

const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null);
  const [loading,setLoading]=useState(false);
  // const navigate=useNavigate();
  const googleProvider=new GoogleAuthProvider();


// create User
  const createUserFunc=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
  }

  // sign in with email & password
  const signInWithEmailAndPasswordFunc=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
  };

  // google login
  const signInWithGoogleFunc=()=>{
    return signInWithPopup(auth,googleProvider);
  }

  const authInfo={
    createUserFunc,
    user,
    setUser,
    loading,
    setLoading,
    signInWithEmailAndPasswordFunc,
    
    signInWithGoogleFunc,
    

  }
  return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;