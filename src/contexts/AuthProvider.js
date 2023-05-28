import React, { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/Firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  // jehetu context use kortechi tai atake dui ta vag ea vag kore korte hobe
  //As We Use Context ,we need to The hole work Two Part.

  // ekta function create korbo ...jar vitor firebase er function return korbo
  // we create a function and Return Firebase Default Function

  // ar amader banano function take handleFrom function ea call kore dibo
  // And Our Function call beside HandleSubmit Function

  const signUpUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = { signUpUser, loginUser };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
