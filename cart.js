import { updateCartQuantity } from "./cartUtils.js";

export let cart = JSON.parse(localStorage.getItem("cart"));

/*If the cart doesnot exist or not initialized*/
/*cart is empty array*/
if (!cart || cart.length === 0) {
  cart = [
    {
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 2,
    },
    {
      id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 1,
    },
  ];
}

export function saveCartStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
export function addToCart(productId) {
  let matchingItem;
  cart.forEach((item) => {
    if (item.id === productId) {
      matchingItem = item;
    }
  });
  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }
  saveCartStorage();
  updateCartQuantity(cart);
}

updateCartQuantity(cart);

export function removeFromCart(pickProduct) {
  const newCart = [];
  cart.forEach((cartItem) => {
    if (cartItem.id !== pickProduct) {
      newCart.push(cartItem);
    }
  });
  cart = newCart;
  saveCartStorage();
}
