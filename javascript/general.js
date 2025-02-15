const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");
const LogIn = document.getElementById("Log In");
//open side navebar
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
//close side navbar
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

//open signin page
if (LogIn) {
  LogIn.addEventListener("click", () => {
    window.location.href = "login.html";
  });
}
