// JavaScript for handling the shopping cart
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

let total = 0;

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", addToCart);
});

function addToCart(event) {
    const product = event.target.parentElement;
    const productName = product.querySelector("h2").innerText;
    const productPrice = parseFloat(product.querySelector(".price").innerText.slice(1));

    const cartItem = document.createElement("li");
    cartItem.innerText = `${productName} - $${productPrice.toFixed(2)}`;
    cartItems.appendChild(cartItem);

    total += productPrice;
    cartTotal.innerText = total.toFixed(2);
}


// In script.js
document.addEventListener("DOMContentLoaded", function () {
    const contactButton = document.getElementById("contactButton");
    
    contactButton.addEventListener("click", function () {
        window.location.href = "contact.html";
    });
});
