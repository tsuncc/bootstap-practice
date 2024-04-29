document.addEventListener('DOMContentLoaded', () => {
  const pageType = document.body.id;  // Identify the page based on the body's ID
  const productSkinBodyContainer = document.getElementById('productSkinBody')?.querySelector('.row');
  const productHairContainer = document.getElementById('productHair')?.querySelector('.row');

  // Filter and display products based on the page type
  if (pageType === 'all') {
    products.forEach(product => {
      const colDiv = document.createElement('div');
      colDiv.className = 'col-11 col-md-7 mb-5 p-0';
      colDiv.innerHTML = generateProductHTML(product);
      if (product.category === 'Skin & body') {
        productSkinBodyContainer.appendChild(colDiv);
      } else if (product.category === 'Hair') {
        productHairContainer.appendChild(colDiv);
      }
    });
  } else if (pageType === 'skin-body') {
    const filteredProducts = products.filter(product => product.category === 'Skin & body');
    filteredProducts.forEach(product => {
      const colDiv = document.createElement('div');
      colDiv.className = 'col-11 col-md-7 mb-5 p-0';
      colDiv.innerHTML = generateProductHTML(product);
      productSkinBodyContainer.appendChild(colDiv);
    });
  } else if (pageType === 'hair') {
    const filteredProducts = products.filter(product => product.category === 'Hair');
    filteredProducts.forEach(product => {
      const colDiv = document.createElement('div');
      colDiv.className = 'col-11 col-md-7 mb-5 p-0';
      colDiv.innerHTML = generateProductHTML(product);
      productHairContainer.appendChild(colDiv);
    });
  }
});

function generateProductHTML(product) {
  return `
    <div class="product-card position-relative overflow-hidden text-center rounded-3 bg-secondary enable-button-pointers" onclick="redirectToDetail(${product.id})">
      <button type="button" class="btn btn-light btn-lg rounded-pill position-absolute end-0 bottom-0 m-4 p-0 icon-button">
        <i class="fa-regular fa-plus"></i>
      </button>
      <div class="pt-4 pb-3">
          <p class="mb-1 fw-bolder">${product.name}</p>
          <p>${product.price}</p>  
      </div>
      <img src="${product.listImage}" alt="${product.name}" class="w-100">
    </div>
  `;
}

function redirectToDetail(productId) {
  localStorage.setItem('currentProduct', productId);
  window.location.href = 'product-details.html';
}
