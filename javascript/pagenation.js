const API_URL = "https://fakestoreapi.com/products?limit=150";

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("product1")) {
    loadShopPage();
  }
  if (document.getElementById("prodetails")) {
    loadProductDetails();
  }
  if (document.querySelector("#cart table tbody")) {
    loadCart();
  }
});

function loadShopPage() {
  fetch(API_URL)
    .then((res) => res.json())
    .then((products) => {
      let urlParams = new URLSearchParams(window.location.search);
      let currentPage = parseInt(urlParams.get("page")) || 1;
      const productsPerPage = 8;
      const totalPages = Math.ceil(products.length / productsPerPage);

      const start = (currentPage - 1) * productsPerPage;
      const end = start + productsPerPage;
      const productsToShow = products.slice(start, end);

      renderProducts(productsToShow);
      renderPagination(totalPages, currentPage);
    })
    .catch((err) => console.error("Error loading products:", err));
}

function renderProducts(products) {
  const container = document.querySelector("#product1 .pro-container");
  if (!container) return;
  container.innerHTML = "";

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("pro");
    productDiv.onclick = () => {
      window.location.href = "sproduct.html?id=" + product.id;
    };

    const img = document.createElement("img");
    img.src = product.image || "img/default.jpg";
    img.alt = product.title || "Product Image";
    productDiv.appendChild(img);

    const desDiv = document.createElement("div");
    desDiv.classList.add("des");

    const span = document.createElement("span");
    span.textContent = product.category || "";
    desDiv.appendChild(span);

    const h5 = document.createElement("h5");
    h5.textContent = product.title || "Product Title";
    desDiv.appendChild(h5);

    const starDiv = document.createElement("div");
    starDiv.classList.add("star");
    const rating = Math.round(product.rating?.rate || 5);
    for (let i = 0; i < rating; i++) {
      const starIcon = document.createElement("i");
      starIcon.className = "fas fa-star";
      starDiv.appendChild(starIcon);
    }
    desDiv.appendChild(starDiv);

    const h4 = document.createElement("h4");
    h4.textContent = "$" + product.price;
    desDiv.appendChild(h4);

    productDiv.appendChild(desDiv);

    const cartLink = document.createElement("a");
    cartLink.href = "#";
    const cartIcon = document.createElement("i");
    cartIcon.className = "fa fa-cart-shopping cart";
    cartLink.appendChild(cartIcon);
    productDiv.appendChild(cartLink);

    container.appendChild(productDiv);
  });
}

function renderPagination(totalPages, currentPage) {
  const paginationContainer = document.getElementById("pagination");
  if (!paginationContainer) return;
  paginationContainer.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const pageLink = document.createElement("a");
    pageLink.href = "?page=" + i;
    pageLink.textContent = i;
    if (i === currentPage) {
      pageLink.classList.add("active");
    }
    paginationContainer.appendChild(pageLink);
  }
  if (currentPage < totalPages) {
    const nextLink = document.createElement("a");
    nextLink.href = "?page=" + (currentPage + 1);
    const arrowIcon = document.createElement("i");
    arrowIcon.className = "fa-solid fa-arrow-right";
    nextLink.appendChild(arrowIcon);
    paginationContainer.appendChild(nextLink);
  }
}

function loadProductDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  if (!productId) return;

  fetch("https://fakestoreapi.com/products/" + productId)
    .then((res) => res.json())
    .then((product) => {
      const mainImg = document.getElementById("MainImg");
      if (mainImg) {
        mainImg.src = product.image || "img/default.jpg";
      }
      const smallImgs = document.getElementsByClassName("small-img");
      for (let i = 0; i < smallImgs.length; i++) {
        smallImgs[i].src = product.image;
      }
      const detailsContainer = document.querySelector(".single-pro-details");
      if (detailsContainer) {
        const breadcrumb = detailsContainer.querySelector("h6");
        if (breadcrumb) {
          breadcrumb.textContent = "Home / " + (product.category || "Category");
        }
        const titleEl = detailsContainer.querySelector("h4");
        if (titleEl) {
          titleEl.textContent = product.title || "Product Title";
        }
        const priceEl = detailsContainer.querySelector("h2");
        if (priceEl) {
          priceEl.textContent = "$" + product.price;
        }
        const descEl = detailsContainer.querySelector("span");
        if (descEl) {
          descEl.textContent = product.description || "";
        }
      }
      const addToCartBtn = document.getElementById("addtocart");
      if (addToCartBtn) {
        addToCartBtn.onclick = () => {
          addToCart(product);
        };
      }
      setupSmallImageSwap();
    })
    .catch((err) => console.error("Error loading product details:", err));
}

function setupSmallImageSwap() {
  const mainImg = document.getElementById("MainImg");
  const smallImgs = document.getElementsByClassName("small-img");
  for (let i = 0; i < smallImgs.length; i++) {
    smallImgs[i].onclick = function () {
      if (mainImg) {
        mainImg.src = this.src;
      }
    };
  }
}

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    existing.quantity = (existing.quantity || 1) + 1;
  } else {
    product.quantity = 1;
    cart.push(product);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product added to cart!");
}

function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const tbody = document.querySelector("#cart table tbody");
  if (!tbody) return;
  tbody.innerHTML = "";
  let subtotal = 0;
  cart.forEach((item) => {
    const tr = document.createElement("tr");

    const tdRemove = document.createElement("td");
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.onclick = () => removeFromCart(item.id);
    tdRemove.appendChild(removeBtn);
    tr.appendChild(tdRemove);

    const tdImage = document.createElement("td");
    const img = document.createElement("img");
    img.src = item.image;
    img.style.width = "50px";
    tdImage.appendChild(img);
    tr.appendChild(tdImage);

    const tdProduct = document.createElement("td");
    tdProduct.textContent = item.title;
    tr.appendChild(tdProduct);

    const tdPrice = document.createElement("td");
    tdPrice.textContent = "$" + item.price;
    tr.appendChild(tdPrice);

    const tdQuantity = document.createElement("td");
    const input = document.createElement("input");
    input.type = "number";
    input.value = item.quantity;
    input.min = 1;
    input.onchange = (e) => {
      updateCartQuantity(item.id, parseInt(e.target.value));
    };
    tdQuantity.appendChild(input);
    tr.appendChild(tdQuantity);

    const tdSubtotal = document.createElement("td");
    const itemSubtotal = item.price * item.quantity;
    tdSubtotal.textContent = "$" + itemSubtotal.toFixed(2);
    tr.appendChild(tdSubtotal);

    subtotal += itemSubtotal;
    tbody.appendChild(tr);
  });

  const cartSubtotalCell = document.querySelector(
    "#cart-add table tr:nth-child(1) td:nth-child(2)"
  );
  if (cartSubtotalCell) {
    cartSubtotalCell.textContent = "$" + subtotal.toFixed(2);
  }
  const totalCell = document.querySelector(
    "#cart-add table tr:nth-child(3) td:nth-child(2)"
  );
  if (totalCell) {
    totalCell.textContent = "$" + subtotal.toFixed(2);
  }
}

function removeFromCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter((item) => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function updateCartQuantity(id, newQuantity) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const item = cart.find((item) => item.id === id);
  if (item) {
    item.quantity = newQuantity;
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
  }
}
