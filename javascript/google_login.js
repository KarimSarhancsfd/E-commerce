"use strict";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCNCaSigEnjigdTVwj3JmeJ0LwIrtIg7_8",
  authDomain: "ecommerce-ce15a.firebaseapp.com",
  projectId: "ecommerce-ce15a",
  storageBucket: "ecommerce-ce15a.firebasestorage.app",
  messagingSenderId: "200539023409",
  appId: "1:200539023409:web:6e7d8d7393601a3a830d10",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "en";
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("googleLogin");
googleLogin.addEventListener("click", function (event) {
  event.preventDefault();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      window.location.href = "../userprofile.html";
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});

function update() {
  const userEmail = document.getElementById("userEmail");
  const username = document.getElementById("username");
  const profile = document.getElementById("profile");
}
