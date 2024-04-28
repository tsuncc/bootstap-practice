document.addEventListener('DOMContentLoaded', () => {
  const products = [
    { name: "100% Plant Squalane", price: "$24.99", imageUrl: "imgs/products-1.webp" },
    { name: "Organic Rosehip Oil", price: "$35.99", imageUrl: "imgs/products-2.webp" },
    { name: "Vitamin C Serum", price: "$42.50", imageUrl: "imgs/products-3.webp" },
    { name: "Daily Moisturizer", price: "$19.99", imageUrl: "imgs/products-4.webp" },
    { name: "Hand Soap rePhil", price: "$1.00", imageUrl: "imgs/products-5.webp" },
    { name: "Hand Soap rePhillable Bottle", price: "$5.00", imageUrl: "imgs/products-6.webp" }
  ];


  function renderProducts(products) {
    const productList = document.getElementById('productList').querySelector('.row');
    const fragment = document.createDocumentFragment(); // 建立 DocumentFragment

    products.forEach(product => {
      const colDiv = document.createElement('div');
      colDiv.className = 'col-8 p-4';
      colDiv.innerHTML = `
              <div class="position-relative overflow-hidden text-center rounded-3 bg-secondary">
                  <button type="button" class="btn btn-light btn-lg rounded-pill position-absolute end-0 bottom-0 m-4">
                      <i class="fa-regular fa-plus"></i>
                  </button>
                  <div class="pt-4 pb-3">
                      <h5 class="mb-2">${product.name}</h5>
                      <p>${product.price}</p>
                  </div>
                  <img src="${product.imageUrl}" alt="" class="w-100">
              </div>
          `;
      fragment.appendChild(colDiv); // 向 fragment 添加元素
    });

    productList.appendChild(fragment); // 將所有元素添加到 DOM 中
  }

  renderProducts(products);
});



