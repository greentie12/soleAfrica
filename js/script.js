const products = document.querySelector("#products");

const file = "../inventory.json";

async function retrieveItems(file) {
  const response = await fetch(file);
  const itemData = await response.json();
  appendItems(itemData);
}

retrieveItems(file);

const appendItems = (items) => {
  products.innerHTML = "";

  items.forEach((item) => {
    let { image, description, originalPrice, salePrice } = item;

    const productCard = document.createElement("div");
    productCard.classList.add("card");

    productCard.insertAdjacentHTML(
      "beforeend",
      `
      <img class="product-img"
      src="${image}"
      alt="Gold Africa Pendant"
      />
      <p class="description">
        ${description}
      </p>
      <div class="price-div">
        <h5 class="strike-price">&dollar;${originalPrice}</h5>
        <h5 class="price">&dollar;${salePrice}</h5>
      </div>
      `
    );
    products.appendChild(productCard);
  });
};
