import { cart, removeFromCart } from "./cart.js";
import { products } from "./products.js";
import { formatCurrency } from "./money.js";

let cartItemsHTML = "";
cart.forEach((cartItem) => {
  let matchingProduct = products.find((product) => product.id === cartItem.id);

  if (!matchingProduct) {
    console.warn(`No matching product found for ID: ${cartItem.id}`);
    return; // skip rendering if no match
  }

  cartItemsHTML += `<div class="cart-item-container js-cart-item-container-${
    matchingProduct.id
  }">
            <div class="delivery-date">Delivery date: Tuesday, June 21</div>

            <div class="cart-item-details-grid">
              <img
                class="product-image"
                src="${matchingProduct.image}"
              />

              <div class="cart-item-details">
                <div class="product-name">
                ${matchingProduct.name}
                </div>
                <div class="product-price">$${formatCurrency(
                  matchingProduct.priceCents
                )}</div>
                <div class="product-quantity">
                  <span> Quantity: <span class="quantity-label">${
                    cartItem.quantity
                  }</span> </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete" data-pick-product="${
                    matchingProduct.id
                  }">
                    Delete 
                  </span>
          
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input
                    type="radio"
                    checked
                    class="delivery-option-input"
                    name="delivery-option-1"
                  />
                  <div>
                    <div class="delivery-option-date">Tuesday, June 21</div>
                    <div class="delivery-option-price">FREE Shipping</div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input
                    type="radio"
                    class="delivery-option-input"
                    name="delivery-option-1"
                  />
                  <div>
                    <div class="delivery-option-date">Wednesday, June 15</div>
                    <div class="delivery-option-price">$4.99 - Shipping</div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input
                    type="radio"
                    class="delivery-option-input"
                    name="delivery-option-1"
                  />
                  <div>
                    <div class="delivery-option-date">Monday, June 13</div>
                    <div class="delivery-option-price">$9.99 - Shipping</div>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
});
document.querySelector(".js-order-summary").innerHTML = cartItemsHTML;
/*js order summary is present in the checkout.html file*/

document.querySelectorAll(".js-delete").forEach((button) => {
  button.addEventListener("click", () => {
    let pickProduct = button.dataset.pickProduct;

    removeFromCart(pickProduct);

    const container = document.querySelector(
      `.js-cart-item-container-${pickProduct}`
    );
    container.remove();
  });
});
