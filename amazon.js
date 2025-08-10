import { products } from "./products.js";
import { formatCurrency } from "./money.js";
import { addToCart, cart } from "./cart.js";

let productItemsHTML = "";
products.forEach((productItems) => {
  productItemsHTML += `        <div class="product-container">
          <div class="product-image-container">
            <img
              class="product-image"
              src="${productItems.image}"
            />
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${productItems.name}
          </div>

          <div class="product-rating-container">
            <img
              class="product-rating-stars"
              src="images/ratings/rating-${productItems.rating.stars * 10}.png"
            />
            <div class="product-rating-count link-primary">${
              productItems.rating.count
            }</div>
          </div>

          <div class="product-price">$${formatCurrency(
            productItems.priceCents
          )}</div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png" />
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart-button" data-product-id="${
            productItems.id
          }" data-product-name="${productItems.name}"
          >Add to Cart</button> 
        </div>
  `;
});

const productsGrid = document.querySelector(".js-products-grid");

if (productsGrid) {
  productsGrid.innerHTML = productItemsHTML;
} else {
  console.log("productsGrid does not triggered");
}

document.querySelectorAll(".js-add-to-cart-button").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;
    const productName = button.dataset.productName;
    addToCart(productId, productName);
  });
});




