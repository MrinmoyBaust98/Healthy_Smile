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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const signUpUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (userInfo) => {
    return updateProfile(user, userInfo);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = { signUpUser, loginUser, updateUser, logOut, user };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
