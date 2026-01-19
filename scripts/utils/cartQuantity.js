import { cart } from "../../data/cart.js";

export function updateCartQuantity(selector) {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  const el = document.querySelector(selector);

  if (cartQuantity == 0){
   el.textContent;
  }
  else if (el) {
    el.textContent = cartQuantity;
  }

  return cartQuantity;
}
