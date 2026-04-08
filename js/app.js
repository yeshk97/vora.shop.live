function formatPrice(price) {
    return 'Rs ' + price.toLocaleString('en-IN');
}

let currentFilter = 'all';

function renderProducts(products) {
    const container = document.getElementById('products');
    if (!container) return;

    if (products.length === 0) {
        container.innerHTML = '<p style="text-align:center;padding:60px 20px;color:#94a3b8;font-size:14px;">No products found</p>';
        return;
    }

    container.innerHTML = products.map(product => {
        const store = product.store === 'Amazon.in' ? 'Amazon' : 'Flipkart';
        return `
            <a href="${product.url}" class="product" target="_blank" rel="noopener sponsored">
                <div class="product-img">
                    <img src="${product.image}" alt="${product.title}" loading="lazy">
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <div class="product-meta">
                        <span class="product-store">${store}</span>
                    </div>
                    <div class="product-bottom">
                        <span class="product-price">${formatPrice(product.currentPrice)}</span>
                        <span class="product-btn">View</span>
                    </div>
                </div>
            </a>
        `;
    }).join('');
}

function filterProducts() {
    let filtered = currentFilter === 'all' 
        ? [...deals] 
        : deals.filter(p => p.category === currentFilter);
    
    filtered.sort((a, b) => b.votes - a.votes);
    return filtered;
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts(filterProducts());

    document.querySelectorAll('.filter').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderProducts(filterProducts());
        });
    });
});
