// 



document.addEventListener("DOMContentLoaded", function () {
    const addToCartBtn = document.getElementById("addtocart");
  
    addToCartBtn.addEventListener("click", function () {
      // Get product details
      const productImage = document.getElementById("MainImg").src;
      const productName = document.querySelector(".single-pro-details h4").innerText;
      const productPrice = document.querySelector(".single-pro-details h2").innerText;
      const productSize = document.querySelector("select").value;
      const productQuantity = document.querySelector("input[type='number']").value;
  
      if (productSize === "Select Size") {
        alert("Please select a size.");
        return;
      }
  
      // Create product object
      let product = {
        image: productImage,
        name: productName,
        price: parseFloat(productPrice.replace("$", "")), // Convert price to a number
        size: productSize,
        quantity: parseInt(productQuantity),
      };
  
      // Retrieve cart from LocalStorage or initialize empty array
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
      // Check if the product already exists in the cart
      let existingProductIndex = cart.findIndex(
        (item) => item.name === product.name && item.size === product.size
      );
  
      if (existingProductIndex !== -1) {
        // Product exists, update quantity
        cart[existingProductIndex].quantity += product.quantity;
      } else {
        // New product, add to cart
        cart.push(product);
      }
  
      // Save updated cart to LocalStorage
      localStorage.setItem("cart", JSON.stringify(cart));
  
      alert("Product added to cart!");
    });
  });
  