// renderProducts.js
document.addEventListener('DOMContentLoaded', () => {
  const productList = document.getElementById('productList').querySelector('.row');
  const fragment = document.createDocumentFragment();

  products.forEach(product => {
    const colDiv = document.createElement('div');
    colDiv.className = 'col-8 p-4';
    colDiv.innerHTML = `
          <div class="product-card position-relative overflow-hidden text-center rounded-3 bg-secondary enable-button-pointers"  onclick="redirectToDetail(${product.id})">
            <button type="button" class="btn btn-light btn-lg rounded-pill position-absolute end-0 bottom-0 m-4">
              <i class="fa-regular fa-plus"></i>
            </button>
            <div class="pt-4 pb-3">
                <h5 class="mb-2">${product.name}</h5>
                <p>${product.price}</p>  
            </div>
            <img src="${product.listImage}" alt="${product.name}" class="w-100">
          </div>
      `;
    fragment.appendChild(colDiv);
  });

  productList.appendChild(fragment);
});

function redirectToDetail(productId) {
  localStorage.setItem('currentProduct', productId);
  window.location.href = 'product-details.html';
}
