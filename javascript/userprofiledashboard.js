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

  document.getElementById("userEmail").textContent = userName;
  // JavaScript

  //fetching picture
  // JavaScript

  // Get the profile picture URL from the fetched data
  var userProfilePictureUrl = userProfilePicture;

  // Create an img element
  var imgElement = document.createElement("img");

  // Set the src attribute to the user's profile picture URL
  imgElement.src = userProfilePictureUrl;

  // Optionally, set other attributes like alt
  imgElement.alt = "User Profile Picture";

  // Apply styles to the img element
  imgElement.style.display = "block";
  imgElement.style.margin = "100px 100px auto";
  imgElement.style.borderRadius = "50%";
  imgElement.style.width = "150px"; // Set a specific width
  imgElement.style.height = "150px"; // Set a specific height
  imgElement.style.objectFit = "cover";

  // Append the img element to the aside element with class "avatar"
  document.querySelector(".avatar").appendChild(imgElement);

  // document.getElementById("").textContent = userProfilePicture;
}
