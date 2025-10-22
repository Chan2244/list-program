const products = [];


function addProduct() {
  const productInput = document.getElementById("product");
  const productName = productInput.value.trim(); 

  products.push(productName);

  productInput.value = "";

  // Display the updated product list
  displayProducts();

}

function displayProducts() {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = ""; 

  if (products.length === 0) {
    outputDiv.innerHTML = "<p>No products added yet.</p>";
    return;
  }

  const ul = document.createElement("ul");
  products.forEach((product) => {
    console.log(product)
    const li = document.createElement("li");
    li.textContent = product;
    ul.appendChild(li);
  });
  outputDiv.appendChild(ul);
}

displayProducts();
console.log("display products")