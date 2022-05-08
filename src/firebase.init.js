/* eslint-disable react-hooks/rules-of-hooks */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { createBrowserHistory } from "history";
import React, { useEffect, useState } from "react";
import { Router, useNavigate } from "react-router-dom";
import swal from "sweetalert";
const firebaseConfig = {
  apiKey: "AIzaSyBSS8Mypxd2n8kBx5ov84BH4XkYII2TKuw",
  authDomain: "the-gym-partner.firebaseapp.com",
  projectId: "the-gym-partner",
  storageBucket: "the-gym-partner.appspot.com",
  messagingSenderId: "889262175576",
  appId: "1:889262175576:web:bc8b1c4ff03ba60286a12d",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export function signUp(email, password, name) {
  //   const user = auth?.currentUser;
  return createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
      updateProfile(auth.currentUser, {
        displayName: name,
      })
        .then(() => {
          swal(`${res?.user?.email}`, "Registration successfully", "success");
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((err) => {
      swal("Oops", `${err.message}`, "error");
    });
}
export function signInGoogle() {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
}
export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logOut() {
  return signOut(auth);
}

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsub;
  }, []);
  return currentUser;
}
