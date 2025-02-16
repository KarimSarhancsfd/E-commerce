"use strict";

// Include Firebase libraries using script tags in your HTML file
// <script src="https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js"></script>
// <script src="https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js"></script>

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
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

//CreateAccount  button
const login = document.getElementById("login");

login.addEventListener("click", function (event) {
  event.preventDefault();

  //inputs
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed
      alert("Loging in...");
      const user = userCredential.user;
      window.location.href = "../userprofile.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});

// function onSignIn(googleUser) {
//   let profile = googleUser.getBasicProfile();
//   console.log("ID: " + profile.getId());
//   console.log("Name: " + profile.getName());
//   console.log("Given Name: " + profile.getGivenName());
//   console.log("Family Name: " + profile.getFamilyName());
//   console.log("Image URL: " + profile.getImageUrl());
//   console.log("Email: " + profile.getEmail());
// }
