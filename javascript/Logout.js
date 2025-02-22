"use strict";

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNCaSigEnjigdTVwj3JmeJ0LwIrtIg7_8",
  authDomain: "ecommerce-ce15a.firebaseapp.com",
  projectId: "ecommerce-ce15a",
  storageBucket: "ecommerce-ce15a.firebasestorage.app",
  messagingSenderId: "200539023409",
  appId: "1:200539023409:web:6e7d8d7393601a3a830d10",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Inputs
// Logout button
const logout = document.getElementById("logout");

logout.addEventListener("click", function (event) {
  event.preventDefault();

  signOut(auth)
    .then(() => {
      // Sign-out successful
      alert("Logging out...");
      window.location.href = "../login.html";
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
});
