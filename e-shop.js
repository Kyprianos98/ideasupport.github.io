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

// Code for the product page
let products = [
	{
		name: "Sewing Machine",
		price: 299.99,
		description: "A high-quality sewing machine for all your sewing needs."
	},
	{
		name: "Thread Set",
		price: 19.99,
		description: "A set of 50 spools of high-quality thread in a variety of colors."
	},
	{
		name: "Scissors",
		price: 9.99,
		description: "A pair of sharp, durable scissors for all your cutting needs."
	}
];

// Display products on the page
function displayProducts() {
	let productContainer = document.getElementById("product-container");
	for (let i = 0; i < products.length; i++) {
		let product = products[i];
		let productElement = document.createElement("div");
		productElement.classList.add("product");
		productElement.innerHTML = `
			<h2>${product.name}</h2>
			<p>${product.description}</p>
			<p>$${product.price.toFixed(2)}</p>
			<button onclick="addItem(${JSON.stringify(product)})">Add to Cart</button>
		`;
		productContainer.appendChild(productElement);
	}
}

// Code for the shopping cart page
function displayCart() {
	let cartContainer = document.getElementById("cart-container");
	cartContainer.innerHTML = "";
	for (let i = 0; i < cart.length; i++) {
		let item = cart[i];
		let itemElement = document.createElement("div");
		itemElement.classList.add("cart-item");
		itemElement.innerHTML = `
			<h2>${item.name}</h2>
			<p>$${item.price.toFixed(2)}</p>
			<button onclick="removeItem(${JSON.stringify(item)})">Remove</button>
		`;
		cartContainer.appendChild(itemElement);
	}
	let totalElement = document.getElementById("total");
	totalElement.innerHTML = `$${calculateTotal()}`;
}