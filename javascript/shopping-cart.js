"use strict";

//   The problem is that the API returns a single product object,
// not an array, so you should not use forEach on the data. Instead,
// you can directly access the category property of the product object.
//  "use strict";

//   await fetch("https://fakestoreapi.com/products/1")
//     .then((res) => {
//       //   console.log(res);
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       data.forEach((brand) => {
//         const markup = `<span>${brand.category}</span>`;
//         document.querySelector("span").insertAdjacentHTML("beforeend", markup);
//       });
//     })
//     .catch((error) => console.log(error));

//here we are fetching data from an object

// fetch("https://fakestoreapi.com/products/1")
//   .then((res) => {
//     //res here is a varaiable
//     //   console.log(res);
//     return res.json();
//   })
//   .then((data_Category) => {
//     console.log(data);
//     let category = `<span>Category:${data_Category.category}</span>`;
//     document.querySelectorAll(".section-p1 span").forEach((span) => {
//       span.insertAdjacentHTML("beforeend", category);
//     });
//   })
//   .catch((error) => console.log(error));

// fetch("https://fakestoreapi.com/products/1")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data_price) => {
//     console.log(data_price);
//     let price = `<span>Price:${data_price.price}<span>`;
//     document.querySelectorAll(".section-p1 h4").forEach((h4) => {
//       h4.insertAdjacentHTML("beforeend", price);
//     });
//   });
