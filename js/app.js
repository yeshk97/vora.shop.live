function formatPrice(price) {
    return '₹' + price.toLocaleString('en-IN');
}

let currentFilter = 'all';

function renderProducts(products) {
    const container = document.getElementById('products-container');
    const countEl = document.getElementById('count');
    
    if (!container) return;

    countEl.textContent = products.length;

    if (products.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <p>No products found</p>
            </div>
        `;
        return;
    }

    container.innerHTML = products.map(product => {
        const discount = Math.round((1 - product.currentPrice / product.originalPrice) * 100);
        const rating = (product.votes % 5) + 3.5;
        const storeShort = product.store === 'Amazon.in' ? 'Amazon' : 'Flipkart';
        const badgeClass = product.badge ? product.badge.toLowerCase() : '';
        
        return `
            <a href="${product.url}" class="product-card" target="_blank" rel="noopener sponsored">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}" loading="lazy">
                    ${product.badge ? `<span class="product-badge ${badgeClass}">${product.badge}</span>` : ''}
                    <span class="product-store">${storeShort}</span>
                    <span class="product-verified">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                        Verified
                    </span>
                </div>
                <div class="product-info">
                    <div class="product-meta">
                        <span class="product-rating">★ ${rating.toFixed(1)}</span>
                        <span class="product-votes">(${product.votes} votes)</span>
                    </div>
                    <h3 class="product-title">${product.title}</h3>
                    <div class="product-bottom">
                        <div class="product-prices">
                            <span class="product-price">${formatPrice(product.currentPrice)}</span>
                            <span class="product-original">${formatPrice(product.originalPrice)}</span>
                            <span class="product-discount">${discount}% off</span>
                        </div>
                        <span class="product-btn">
                            View
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </span>
                    </div>
                </div>
            </a>
        `;
    }).join('');
}

function filterProducts() {
    let filtered = [...deals];

    if (currentFilter !== 'all') {
        filtered = filtered.filter(p => p.category === currentFilter);
    }

    filtered.sort((a, b) => b.votes - a.votes);

    return filtered;
}

function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-chip');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderProducts(filterProducts());
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts(filterProducts());
    initFilters();
});
