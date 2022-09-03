import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDd0xJ_FaQi0W5JQ56o8Dcxy_9SOA4wMxQ",
  authDomain: "olx-clone-209b9.firebaseapp.com",
  projectId: "olx-clone-209b9",
  storageBucket: "olx-clone-209b9.appspot.com",
  messagingSenderId: "221525289998",
  appId: "1:221525289998:web:9aeb7766423c16a0afa05f",
  measurementId: "G-SSEM7BEYJ2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export const storage = getStorage(app);

export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function logIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logOut() {
  return signOut(auth);
}

export function useAuth() {
  const [currentUser, setcurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setcurrentUser(user);
    });
    return unsub;
  }, []);

  return currentUser;
}
