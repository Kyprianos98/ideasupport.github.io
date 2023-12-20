// Code for the shopping cart
let cart = [];

// Add item to cart
function addItem(item) {
	cart.push(item);
}

// Remove item from cart
function removeItem(item) {
	let index = cart.indexOf(item);
	if (index > -1) {
		cart.splice(index, 1);
	}
}

// Calculate total price of items in cart
function calculateTotal() {
	let total = 0;
	for (let i = 0; i < cart.length; i++) {
		total += cart[i].price;
	}
	return total;
}

// Show cart
function showCart() {
	let cartContainer = document.createElement("div");
	cartContainer.id = "cart-container";
	cartContainer.innerHTML = `
		<h2>Shopping Cart</h2>
		<button onclick="hideCart()">Close</button>
		<div id="cart-items"></div>
		<p>Total: $<span id="total"></span></p>
	`;
	document.body.appendChild(cartContainer);
	displayCart();
}

// Hide cart
function hideCart() {
	let cartContainer = document.getElementById("cart-container");
	document.body.removeChild(cartContainer);
}

// Display cart items
function displayCart() {
	let cartItems = document.getElementById("cart-items");
	cartItems.innerHTML = "";
	for (let i = 0; i < cart.length; i++) {
		let item = cart[i];
		let itemElement = document.createElement("div");
		itemElement.classList.add("cart-item");
		itemElement.innerHTML = `
			<h3>${item.name}</h3>
			<p>$${item.price.toFixed(2)}</p>
			<button onclick="removeItem(${JSON.stringify(item)})">Remove</button>
		`;
		cartItems.appendChild(itemElement);
	}
	let totalElement = document.getElementById("total");
	totalElement.innerHTML = calculateTotal().toFixed(2);
}
