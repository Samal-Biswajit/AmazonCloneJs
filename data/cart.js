export const cart = [];

export function addToCart(productId, productContainer) {
  let matchingItem;
  const quantitySelect = productContainer.querySelector("select");
  const quantity = Number(quantitySelect.value);
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });
  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({
      productId,
      quantity,
    });
  }
}
