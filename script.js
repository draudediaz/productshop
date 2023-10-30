document.addEventListener("DOMContentLoaded", function(){
const productContainer = document.getElementById("productContainer")

fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data => {
    console.log(data.products)
    data.products.forEach(product => {
        const productCard = document.createElement("div")
        productCard.classList.add("productCard")
        const idProduct = product.id
        const link = document.createElement("a")
        link.textContent = product.title
        link.href = `product.html?id=${idProduct}`;
        const imageProduct = document.createElement("img")
        imageProduct.src=product.thumbnail
        imageProduct.classList.add("imageProduct")
        const productTitle = document.createElement("h3")
        productTitle.classList.add("productTitle")
        const productPrice = document.createElement("h3")
        productPrice.textContent = product.price+" €"
        productPrice.classList.add("productPrice")
        const productDescription = document.createElement("p")
        productDescription.textContent = product.description
        productDescription.classList.add("productDescription")


        productContainer.appendChild(productCard);
        productCard.appendChild(productTitle);
        productTitle.appendChild(link)
        productCard.appendChild(imageProduct);
        productCard.appendChild(productPrice);
        productCard.appendChild(productDescription);
    });
}
    );
})

