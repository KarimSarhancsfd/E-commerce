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
let user = auth.currentUser;

onAuthStateChanged(auth, (user) => {
  console.log(user);
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log(uid);
    updateUserProfile(user);
    return uid;

    // ...
  } else {
    // User is signed out
    alert("Creat Account & login");
    window.location.href = "../regestration.html";
    // ...
  }
});

// Function  update user profile

function updateUserProfile(user) {
  const userName = user.displayName;
  const userEmail = user.email;
  const userProfilePicture = user.photoURL;

  //update the profile section with user data

  document.getElementById("userEmail").textContent = userEmail;
}
