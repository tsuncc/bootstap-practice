document.addEventListener("DOMContentLoaded", function() {
  const pathname = window.location.pathname;
  let breadcrumbPaths;

  if (pathname.includes("products.html")) {
    breadcrumbPaths = [
      { name: 'Home', url: 'index.html' },
      { name: 'Products', url: '#' }
    ];
  } else if (pathname.includes("product-details.html")) {
    // 取得 product name
    const productId = localStorage.getItem('currentProduct');
    const product = products.find(p => p.id == parseInt(productId));

    breadcrumbPaths = [
      { name: 'Home', url: 'index.html' },
      { name: 'Products', url: 'products.html' },
      { name: `${product.name}`, url: '#' }
    ];
  } else if (pathname.includes("about.html")) {
    breadcrumbPaths = [
      { name: 'Home', url: 'index.html' },
      { name: 'About', url: '#' }
    ];
  } else {
    breadcrumbPaths = [
      { name: 'Home', url: '#' }
    ];
  }
  updateBreadcrumbs(breadcrumbPaths);
});


function updateBreadcrumbs(paths) {
  const breadcrumbContainer = document.querySelector("#myBreadcrumb .breadcrumb");
  breadcrumbContainer.innerHTML = '';

  paths.forEach((path, index) => {
      const li = document.createElement('li');
      li.className = 'breadcrumb-item';
      if (index === paths.length - 1) {
          li.classList.add('active');
          li.setAttribute('aria-current', 'page');
          li.textContent = path.name;
      } else {
          const a = document.createElement('a');
          a.href = path.url;
          a.textContent = path.name;
          li.appendChild(a);
      }
      breadcrumbContainer.appendChild(li);
  });
}
