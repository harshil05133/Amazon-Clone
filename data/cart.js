
export let cart = [];

export function addToCart(productId){
  let matchingItem;

  cart.forEach((cartItem) => {
    if(productId === cartItem.productId){
      matchingItem = cartIitem;
    }
  });

  if (matchingItem){
    matchingItem.quantity++;
  }
  else{
    cart.push({
      productId: productId,
      quantity: 1
    });
  }
}
