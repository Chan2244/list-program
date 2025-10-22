let products = []; // Array to store product names

let newProduct = prompt("Enter a new product name:"); // Get user input
productNames.push(newProduct); // Add the new product to the array

function addProduct() {
  const productInput = document.getElementById('product');
  const productName = productInput.value.trim(); // Get product name and remove whitespace

  if (productName === "") {
    alert("Please enter a product name.");
    return; // Prevent adding empty product names
  }

  products.push(productName); // Add the new product to the array
  productInput.value = ""; // Clear the input field

  displayProducts(); // Update the displayed list
}

function displayProducts() {
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = ""; // Clear previous content

  // Loop through the products array and display each item
  for (let i = 0; i < products.length; i++) {
    const productItem = document.createElement('p'); // Create a paragraph for each product
    productItem.textContent = products[i]; // Set the text content
    outputDiv.appendChild(productItem); // Add the product to the output div
  }
}
const items = [
  { name: "Apple" },
  { name: "Banana"},
  { name: "Orange" }
];

// Looping through the array of objects
for (const item of items) {
  console.log(`Item: ${item.name}`);
}

// Alternatively, using forEach
items.forEach(item => {
  console.log(`Item: ${item.name}}`);
})