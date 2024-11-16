// const products =[
//     {
//         name: "laptop", instock: true
//     },
//     {
//         name: "smartphone", instock: true
//     },
//     {
//         name: "tablet", instock: false
//     },
//     {
//         name: "headphone", instock: true

//     },
//     {
//         name: "smartwatch", instock: false
//     }
// ];
// // matching = products
// const displayProducts =(searchQuery = "") =>{
//     const productContainer = document.getElementById("productContainer");
//     productContainer.innerHTML = "";
//     // previousresults

//     const filteredProducts = products.filter(product => product.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()));
//     if (filteredproducts.length === 0) {
//         productContainer.innerHTML = "<p>No product founds</p>";
//         return;
//     }
//     filteredProducts.forEach(product => {
//         const productButton = document.createElement("button");
//         productButton.classList.add("product-button");
//         if (!product.inStock) {
//             productButton.classList.add("out-of-stock");
//             productButton.textContent = `${product.name}(outofstock);`

//             productButton.disabled = true;
//         }
//         else {
//             productButton.textContent = `${ product.name }
//             (Instock);`
//         }


//         productContainer.appendchild(productButton);

//     });
// };
// document.getElementById("searchButton").addEventListener("click", () => {
//     const searchInput = document.getElementById("searchInput").value;
//     displayProducts(searchInput);
// });
// displayProducts();

const products = [
    { name: "Mobile", stock: "In Stock" },
    { name: "Watch", stock: "Out of Stock" },
    { name: "Laptop", stock: "In Stock" },
    { name: "Tablet", stock: "In Stock" },
    { name: "Headphones", stock: "In Stock" }
];
document.getElementById("checkStockBtn").addEventListener("click", () => {
    const inputProduct = document.getElementById("productInput").value;

    
    const stockStatus = products.map(product => {
        if (product.name.toLowerCase() === inputProduct.toLowerCase()) {
            return `${product.name} is ${product.stock}`;
        }
    }).filter(status => status); 


    document.getElementById("output").innerText = stockStatus.length
        ? stockStatus[0]
        : "Product not found.";
});
