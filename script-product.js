document.addEventListener("DOMContentLoaded",function(){
    const productMain = document.getElementById("productMain")
    
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const urlFetch = `https://dummyjson.com/products/${productId}`
    fetch(urlFetch)
    .then(res => res.json())
    .then(data => {
        const photoCaseMain = document.createElement("div")
        photoCaseMain.classList.add("photoCaseMain")
        const titleMain = document.createElement("h2")
        titleMain.classList.add("titleMainProduct")
        titleMain.textContent = data.title
        const photoProductMain = document.createElement("img")
        photoProductMain.src=data.thumbnail
        photoProductMain.classList.add("photoProductMain")
        const galleryProduct = document.createElement("div")
        galleryProduct.classList.add("galleryProduct")
        const photoMini1 = document.createElement("img")
        photoMini1.src=data.images[0]
        const photoMini2 = document.createElement("img")
        photoMini2.src=data.images[1]
        const photoMini3 = document.createElement("img")
        photoMini3.src=data.images[2]
        const dataProductMain = document.createElement("div")
        dataProductMain.classList.add("dataProductMain")
        const descriptionProductMain = document.createElement("p")
        descriptionProductMain.classList.add("descriptionProductMain")
        descriptionProductMain.textContent = data.description
        const priceProductMain = document.createElement ("h3")
        priceProductMain.classList.add("priceProductMain")
        priceProductMain.textContent = data.price + "€"




        productMain.appendChild(photoCaseMain);
        photoCaseMain.appendChild(titleMain);
        photoCaseMain.appendChild(photoProductMain);
        photoCaseMain.appendChild(galleryProduct);
        galleryProduct.appendChild(photoMini1);
        galleryProduct.appendChild(photoMini2);
        galleryProduct.appendChild(photoMini3);
        productMain.appendChild(dataProductMain);
        dataProductMain.appendChild(descriptionProductMain);
        dataProductMain.appendChild(priceProductMain);


    });
            

    
    
    })