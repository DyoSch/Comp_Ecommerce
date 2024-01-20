function listProducts(numProducts) {
  const productsSection = document.querySelector(".products");

  const products = [];

  for (let i = 1; i <= numProducts; i++) {
    const product = {
      name: `Product ${i} Name`,
      imageSrc: `assets/pictures/product${
        Math.floor(Math.random() * 9) + 1
      }.png`,
      price: `${(Math.random() * 16000000).toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      })}`,
      rating: Math.floor(Math.random() * 5) + 1,
    };
    products.push(product);
  }

  products.forEach((product, index) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const image = document.createElement("img");
    image.src = product.imageSrc;
    image.alt = product.name;

    const heading = document.createElement("h3");
    heading.textContent = product.name;

    const paragraph = document.createElement("p");
    paragraph.textContent = product.description;

    const price = document.createElement("p");
    price.textContent = `Price: ${product.price}`;

    const rating = document.createElement("p");
    rating.textContent = `Rating: ${product.rating}/5`;

    productCard.appendChild(image);
    productCard.appendChild(heading);
    productCard.appendChild(paragraph);
    productCard.appendChild(price);
    productCard.appendChild(rating);

    productCard.addEventListener("click", () => {
      window.location.href = `descProduct.html?productId=${index + 1}`;
    });

    productsSection.appendChild(productCard);
  });
}

listProducts(25);
