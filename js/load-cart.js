function loadCart() {
  const cartContainer = document.getElementById('cartOffcanvas');
  if (cartContainer) {
    fetch('html/cart.html')
      .then(response => response.text())
      .then(html => {
        cartContainer.innerHTML = html;
      })
      .catch(error => console.error('Error loading the cart:', error));
  }
}

document.addEventListener('DOMContentLoaded', loadCart);