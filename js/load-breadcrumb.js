document.addEventListener("DOMContentLoaded", function() {
  const referrer = document.referrer;
  const pathname = window.location.pathname;
  let breadcrumbPaths = [{ name: 'Home', url: 'index.html' }];

  if (pathname.includes("product-details.html")) {
      const productId = localStorage.getItem('currentProduct');
      const product = products.find(p => p.id === parseInt(productId, 10));
      const previousSegment = referrer ? new URL(referrer).pathname.split('/').pop() : '';

      if (product) {
          const categoryMap = {
            'products-skin-body.html': 'Skin & Body',
            'products-hair.html': 'Hair'
          };
          const category = categoryMap[previousSegment] || 'All Products';
          breadcrumbPaths.push({ name: category, url: previousSegment || 'products-all.html' });
          breadcrumbPaths.push({ name: product.name, url: '#' });
      }
  } else {
      const pageMap = {
        'products-all.html': 'All Products',
        'products-skin-body.html': 'Skin & body',
        'products-hair.html': 'Hair',
        'about.html': 'About'
      };
      const pageName = pageMap[pathname.split('/').pop()] || 'Product Details';
      breadcrumbPaths.push({ name: pageName, url: '#' });
  }

  updateBreadcrumbs(breadcrumbPaths);
});

function updateBreadcrumbs(paths) {
  const breadcrumbContainer = document.querySelector("#myBreadcrumb .breadcrumb");
  breadcrumbContainer.innerHTML = '';

  paths.forEach((path, index) => {
      const li = document.createElement('li');
      li.className = 'breadcrumb-item' + (index === paths.length - 1 ? ' active' : '');
      li.setAttribute('aria-current', (index === paths.length - 1 ? 'page' : undefined));
      li.innerHTML = index === paths.length - 1 ? path.name : `<a href="${path.url}">${path.name}</a>`;
      breadcrumbContainer.appendChild(li);
  });
}
