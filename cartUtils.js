

export function updateCartQuantity(cart) {
  let cartQuantity = 0;

  cart.forEach((item) => {
    cartQuantity += item.quantity;
  });
  let cartUI;
  cartUI = document.querySelector(".cart-quantity");
  /*.cart-quantity is present in the amazon.html file*/
  if (cartUI) {
    cartUI.textContent = cartQuantity;
  }
}

