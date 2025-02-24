//

document.addEventListener("DOMContentLoaded", function () {
  const cartTableBody = document.querySelector("#cart tbody");
  const subtotalElement = document.querySelector(
    "#subtotal table tr:nth-child(1) td:last-child"
  );
  const totalElement = document.querySelector(
    "#subtotal table tr:nth-child(3) td:last-child"
  );

  // Retrieve cart from LocalStorage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function updateCartDisplay() {
    cartTableBody.innerHTML = "";
    let totalPrice = 0;

    cart.forEach((product, index) => {
      let productTotal = product.price * product.quantity;
      totalPrice += productTotal;

      let row = document.createElement("tr");
      row.innerHTML = `
          <td><a href="#" class="remove-item" data-index="${index}"><i class="fa-solid fa-circle-xmark"></i></a></td>
          <td><img src="${product.image}" alt="Product Image" width="50"></td>
          <td>${product.name} (Size: ${product.size})</td>
          <td>$${product.price.toFixed(2)}</td>
          <td><input type="number" value="${
            product.quantity
          }" min="1" class="cart-quantity" data-index="${index}"></td>
          <td>$${productTotal.toFixed(2)}</td>
        `;

      cartTableBody.appendChild(row);
    });

    // Update total
    subtotalElement.textContent = `$${totalPrice.toFixed(2)}`;
    totalElement.textContent = `$${totalPrice.toFixed(2)}`;

    // Add event listeners to remove buttons
    document.querySelectorAll(".remove-item").forEach((button) => {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        let index = this.getAttribute("data-index");
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartDisplay();
      });
    });

    // Add event listeners to quantity inputs
    document.querySelectorAll(".cart-quantity").forEach((input) => {
      input.addEventListener("change", function () {
        let index = this.getAttribute("data-index");
        cart[index].quantity = parseInt(this.value);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartDisplay();
      });
    });
  }

  updateCartDisplay();
});
