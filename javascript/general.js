const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");
const signin = document.getElementById("Sign in");
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
if (signin) {
  signin.addEventListener("click", () => {
    window.location.href = "signin.html";
  });
}

// fetch("https://fakestoreapi.com/carts/user/2")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// fetch("https://fakestoreapi.com/carts", {
//   method: "POST",
//   body: JSON.stringify({
//     userId: 5,
//     date: 2020 - 02 - 03,
//     products: [
//       { productId: 5, quantity: 1 },
//       { productId: 1, quantity: 5 },
//     ],
//   }),
// })
//   .then((res) => res.json())
//   .then((json) => console.log(json));
