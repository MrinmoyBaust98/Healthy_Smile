import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/Firebase.config";

// To auth provider we need authcontext and auth alltime
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  // jehetu context use kortechi tai atake dui ta vag ea vag kore korte hobe
  //As We Use Context ,we need to The hole work Two Part.

  // ekta function create korbo ...jar vitor firebase er function return korbo
  // we create a function and Return Firebase Default Function

  // ar amader banano function take handleFrom function ea call kore dibo
  // And Our Function call beside HandleSubmit Function

  // OnAuthSatateChange
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const signUpUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (userInfo) => {
    return updateProfile(user, userInfo);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = { signUpUser, loginUser, updateUser, logOut, user, loading };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
