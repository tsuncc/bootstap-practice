function loadPromo() {
  const promoContainer = document.getElementById('promoOffcanvas');
  if (promoContainer) {
    fetch('html/promo.html')
      .then(response => response.text())
      .then(html => {
        promoContainer.innerHTML = html;
      })
      .catch(error => console.error('Error loading the promotion:', error));
  }
}

document.addEventListener('DOMContentLoaded', loadPromo);