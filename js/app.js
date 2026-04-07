function formatPrice(price) {
    return '₹' + price.toLocaleString('en-IN');
}

let currentFilter = 'all';
let currentSort = 'featured';
let activeStores = ['Amazon.in', 'Flipkart'];

function renderProducts(products) {
    const container = document.getElementById('products-container');
    const countEl = document.getElementById('count');
    if (!container) return;

    countEl.textContent = products.length;

    if (products.length === 0) {
        container.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1; text-align: center; padding: 80px 20px;">
                <p style="color: var(--text-muted); font-size: 16px;">No products match your filters.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = products.map(product => {
        const discount = Math.round((1 - product.currentPrice / product.originalPrice) * 100);
        
        return `
            <article class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}" loading="lazy">
                    ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                    <span class="product-store">${product.store}</span>
                </div>
                <div class="product-content">
                    <h3 class="product-title">${product.title}</h3>
                    <div class="product-price">
                        <span class="product-price-current">${formatPrice(product.currentPrice)}</span>
                        <span class="product-price-original">${formatPrice(product.originalPrice)}</span>
                        <span class="product-price-discount">${discount}% off</span>
                    </div>
                    <a href="${product.url}" class="product-link" target="_blank" rel="noopener sponsored">
                        Shop Now
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </a>
                </div>
            </article>
        `;
    }).join('');
}

function filterProducts() {
    let filtered = [...deals];

    if (currentFilter !== 'all') {
        filtered = filtered.filter(p => p.category === currentFilter);
    }

    filtered = filtered.filter(p => activeStores.includes(p.store));

    if (currentSort === 'price-asc') {
        filtered.sort((a, b) => a.currentPrice - b.currentPrice);
    } else if (currentSort === 'price-desc') {
        filtered.sort((a, b) => b.currentPrice - a.currentPrice);
    } else if (currentSort === 'featured') {
        filtered.sort((a, b) => b.votes - a.votes);
    }

    return filtered;
}

function filterByPrice(maxPrice) {
    let filtered = [...deals];
    filtered = filtered.filter(p => p.currentPrice <= maxPrice);
    filtered = filtered.filter(p => activeStores.includes(p.store));
    
    if (currentSort === 'price-asc') {
        filtered.sort((a, b) => a.currentPrice - b.currentPrice);
    } else if (currentSort === 'price-desc') {
        filtered.sort((a, b) => b.currentPrice - a.currentPrice);
    }
    
    return filtered;
}

function updateActiveButtons(buttons, activeEl) {
    buttons.forEach(btn => btn.classList.remove('active'));
    if (activeEl) activeEl.classList.add('active');
}

function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn[data-filter]');
    const priceBtns = document.querySelectorAll('.filter-btn[data-price]');
    const sortBtns = document.querySelectorAll('.sort-btn');
    const storeCheckboxes = document.querySelectorAll('.store-option input');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            updateActiveButtons(filterBtns, btn);
            priceBtns.forEach(b => b.classList.remove('active'));
            currentFilter = btn.dataset.filter;
            renderProducts(filterProducts());
        });
    });

    priceBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            updateActiveButtons(priceBtns, btn);
            const price = parseInt(btn.dataset.price);
            renderProducts(filterByPrice(price));
        });
    });

    sortBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            updateActiveButtons(sortBtns, btn);
            currentSort = btn.dataset.sort;
            renderProducts(filterProducts());
        });
    });

    storeCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            activeStores = Array.from(storeCheckboxes)
                .filter(cb => cb.checked)
                .map(cb => cb.dataset.store);
            renderProducts(filterProducts());
        });
    });
}

function initScrollEffect() {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts(filterProducts());
    initFilters();
    initScrollEffect();
});
