// Get all the product cards
const productCards = document.querySelectorAll('.product');

// Add a click event listener to each product card
productCards.forEach(card => {
  card.addEventListener('click', () => {
    // Get the product name and price from the card
    const productName = card.querySelector('h3').textContent;
    const productPrice = card.querySelector('p').textContent;

    // Create a new order item and add it to the cart
    const cartItem = document.createElement('li');
    cartItem.textContent = `${productName} - ${productPrice}`;
    const cart = document.querySelector('.cart ul');
    cart.appendChild(cartItem);
  });
});

// Clear the cart when the "Clear Cart" button is clicked
const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', () => {
  const cart = document.querySelector('.cart ul');
  cart.innerHTML = '';
});