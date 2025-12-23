const productsData = {
  oily: [
    { name: "Oil Control Face Wash", price: 299, img: "images/oily/facewash.png" },
    { name: "Niacinamide Serum", price: 499, img: "images/oily/serum.png" },
    { name: "Gel Moisturizer", price: 399, img: "images/oily/moisturizer.png" },
    { name: "Matte Sunscreen", price: 499, img: "images/oily/sunscreen.png" }
  ],

  dry: [
    { name: "Cream Face Wash", price: 299, img: "images/dry/facewash.png" },
    { name: "Ceramide Serum", price: 499, img: "images/dry/serum.png" },
    { name: "Deep Moisturizer", price: 449, img: "images/dry/moisturizer.png" },
    { name: "Hydrating Sunscreen", price: 499, img: "images/dry/sunscreen.png" }
  ],

  normal: [
    { name: "Gentle Face Wash", price: 299, img: "images/normal/facewash.png" },
    { name: "Vitamin C Serum", price: 499, img: "images/normal/serum.png" },
    { name: "Daily Moisturizer", price: 399, img: "images/normal/moisturizer.png" },
    { name: "SPF Sunscreen", price: 449, img: "images/normal/sunscreen.png" }
  ],

  combination: [
    { name: "Balancing Face Wash", price: 299, img: "images/combination/facewash.png" },
    { name: "Hyaluronic Serum", price: 499, img: "images/combination/serum.png" },
    { name: "Light Moisturizer", price: 399, img: "images/combination/moisturizer.png" },
    { name: "SPF 50 Sunscreen", price: 499, img: "images/combination/sunscreen.png" }
  ]
};

let cart = [];
let total = 0;

function showProducts(type) {
  const container = document.getElementById("products");
  container.innerHTML = "";

  productsData[type].forEach(product => {
    container.innerHTML += `
      <div class="product">
        <img src="${product.img}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart('${product.name}', ${product.price})">
          Add to Cart
        </button>
      </div>
    `;
  });
}

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
  document.getElementById("cart-count").innerText = cart.length;
}

function removeFromCart(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  updateCart();
  document.getElementById("cart-count").innerText = cart.length;
}

function updateCart() {
  const list = document.getElementById("cart-items");
  list.innerHTML = "";

  cart.forEach((item, index) => {
    list.innerHTML += `
      <li>
        ${item.name} - ₹${item.price}
        <button onclick="removeFromCart(${index})">❌</button>
      </li>
    `;
  });

  document.getElementById("total").innerText = total;
}

function toggleCart() {
  document.getElementById("cart-panel").classList.toggle("open");
}

function placeOrder() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  document.getElementById("thankyou").style.display = "block";
  window.scrollTo(0, document.body.scrollHeight);
}

