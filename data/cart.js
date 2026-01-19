export let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}

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
      deliveryOptionId: '1'
    });
  }

  saveToStorage();
}

export function removeFromCart(productId){
  const newCart = [];

  cart.forEach((cartItem)=>{
    if(cartItem.productId !==productId){
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  saveToStorage();
}

export function updateQuantity(productId, newQuantity) {
  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      cartItem.quantity = newQuantity;
    }
  });

  saveToStorage();
}




