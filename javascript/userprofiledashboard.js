"use strict";

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
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
const user = auth.currentUser;

// Listen for changes in authentication state
onAuthStateChanged(auth, (user) => {
  console.log(user);
  if (user) {
    // User is signed in; update the UI with user info.
    updateUserProfile(user);
    const uid = user.uid;
    return uid;
  } else {
    // User is signed out; redirect to registration/login page.
    alert("Please create an account and log in.");
    window.location.href = "../regestration.html";
  }
});

// Function to update user profile elements with data from Firebase
function updateUserProfile(user) {
  // Extract user properties (ensure these properties are set in your Firebase Auth user record)
  const userName = user.displayName || "Anonymous User";
  const userEmail = user.email;
  // Use a fallback URL string if photoURL is not available
  //   const userProfilePicture =
  //     user.photoURL ||
  //     "https://raw.githubusercontent.com/MoosaSaadat/user-profile/master/ProfilePicture11.jpg";

  // Update the corresponding HTML elements if they exist
  const usernameElem = document.getElementById("profile-username-first");
  const emailElem = document.getElementById("userEmail");
  const profilePictureElem = document.getElementById("userProfilePicture");

  if (usernameElem) {
    usernameElem.textContent = userName;
  }
  if (emailElem) {
    emailElem.textContent = userEmail;
  }
  if (profilePictureElem) {
    profilePictureElem.src = userProfilePicture;
  }
}
