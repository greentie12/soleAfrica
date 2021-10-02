const products = document.querySelector("#products");

// const file = "../inventory.json";

let inventory = [
  {
    id: 1,
    image: "./images/gold-africa.jpeg",
    description:
      "18k gold pendant craftfully shaped into the continent of Africa",
    originalPrice: 1325,
    salePrice: 960,
  },

  {
    id: 2,
    image: "./images/kenya-shield.png",
    description:
      "Authentic African handmade earrings designed by Nembe Karuki in Kenya",
    originalPrice: 125,
    salePrice: 65,
  },
  {
    id: 3,
    image: "./images/mask-1.jpg",
    description:
      "This mask was carved by locals in the Ivory Coast and measure 27 inches tall and weighs 10 pounds",
    originalPrice: 325,
    salePrice: 165,
  },
  {
    id: 4,
    image: "./images/beaded-neck.jpg",
    description: "Handmade necklace with matching earrings.",
    originalPrice: 250,
    salePrice: 120,
  },
  {
    id: 5,
    image: "./images/gold-brac.jpg",
    description: "18K Gold lion bracelet designed and made in South Africa.",
    originalPrice: 250,
    salePrice: 120,
  },
  {
    id: 6,
    image: "./images/table.jpg",
    description:
      "African table hand carved from a single piece of wood from Ghana in 1921.",
    originalPrice: 2500,
    salePrice: 2100,
  },
  {
    id: 7,
    image: "./images/modern-table.jpg",
    description: "Hand carved wooden table created and designed in Kenya.",
    originalPrice: 1950,
    salePrice: 1200,
  },
  {
    id: 8,
    image: "./images/table.jpg",
    description:
      "African table hand carved from a single piece of wood from Ghana in 1921.",
    originalPrice: 2500,
    salePrice: 2100,
  },
];

// async function retrieveItems(file) {
//   const res = await fetch(file);
//   const itemData = await res.json();
//   appendItems(itemData);
// }

// retrieveItems(file);

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

appendItems(inventory);
