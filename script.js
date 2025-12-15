// 1. Fetching from the DummyJSON API
fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then(data => {
        let output = "";

        // 2. Loop through 'data.products'
        data.products.forEach(product => {
            
            // 3. Calculating Price (Approx $1 = ₹83)
            let priceInRupees = Math.round(product.price * 83);

            output += `
                <div class="product-card">
                    <img src="${product.thumbnail}" alt="${product.title}">
                    
                    <div class="product-title">${product.title}</div>
                    
                    <div class="price">₹ ${priceInRupees.toLocaleString()}</div>
                    
                    <button class="btn" onclick="addToCart('${product.title}')">Add to Cart</button>
                </div>
            `;
        });

        document.getElementById("products").innerHTML = output;
    })
    .catch(error => {
        console.log("Error:", error);
        document.getElementById("products").innerHTML = "<p>Failed to load products.</p>";
    });

// Simple Cart Alert Function
function addToCart(itemName) {
    alert(itemName + " added to cart!");
}