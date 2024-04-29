document.addEventListener('DOMContentLoaded', () => {
    const productId = localStorage.getItem('currentProduct');
    const product = products.find(p => p.id == parseInt(productId));

    if (product) {
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-price').textContent = product.price;
        document.getElementById('product-size').textContent = product.size;
        document.getElementById('product-ingredients').textContent = product.ingredients;
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('product-usage').textContent = product.usage;

        const carouselIndicators = document.querySelector('.carousel-indicators');
        const carouselInner = document.querySelector('.carousel-inner');

        product.images.forEach((image, index) => {
            // Create carousel indicator for each image
            const indicator = document.createElement('button');
            indicator.setAttribute('type', 'button');
            indicator.setAttribute('data-bs-target', '#productCarouselIndicators');
            indicator.setAttribute('data-bs-slide-to', index);
            indicator.setAttribute('aria-label', `Slide ${index + 1}`);
            if (index === 0) {
                indicator.classList.add('active');
                indicator.setAttribute('aria-current', 'true');
            }
            carouselIndicators.appendChild(indicator);

            // Create carousel item for each image
            const carouselItem = document.createElement('div');
            carouselItem.className = 'carousel-item' + (index === 0 ? ' active' : '');
            const img = document.createElement('img');
            img.src = image;
            img.className = 'd-block w-100';
            img.alt = `Slide ${index + 1}`;
            carouselItem.appendChild(img);
            carouselInner.appendChild(carouselItem);
        });
    }
});

