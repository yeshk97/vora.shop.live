function formatPrice(price) {
    return '₹' + price.toLocaleString('en-IN');
}

function calculateDiscount(current, original) {
    if (!original || original <= current) return null;
    return Math.round(((original - current) / original) * 100);
}

function getBadgeColor(badge) {
    const colors = {
        'Hot': '#ef4444',
        'Trending': '#f97316',
        'New': '#22c55e',
        'Bestseller': '#667eea',
        'Top Rated': '#eab308',
        'Deal': '#ec4899'
    };
    return colors[badge] || '#667eea';
}

let currentSort = 'popular';

function renderProducts(products) {
    const container = document.getElementById('products');
    if (!container) return;

    if (products.length === 0) {
        container.innerHTML = '<p style="text-align:center;padding:60px 20px;color:#94a3b8;font-size:14px;">No products found</p>';
        return;
    }

    container.innerHTML = products.map(product => {
        const discount = calculateDiscount(product.currentPrice, product.originalPrice);
        const badgeColor = getBadgeColor(product.badge);
        
        return `
            <div class="product-card" data-id="${product.id}">
                <a href="${product.url}" class="product" target="_blank" rel="noopener sponsored">
                    <div class="product-img">
                        <img src="${product.image}" alt="${product.title}" loading="lazy">
                        ${discount ? `<span class="discount-badge">-${discount}%</span>` : ''}
                        ${product.badge ? `<span class="product-badge" style="background:${badgeColor}">${product.badge}</span>` : ''}
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">${product.title}</h3>
                        <div class="product-bottom">
                            <span class="product-price">${formatPrice(product.currentPrice)}</span>
                            <span class="product-btn">View</span>
                        </div>
                    </div>
                </a>
                <button class="share-btn" onclick="shareProduct(${product.id}, event)" aria-label="Share">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
                </button>
            </div>
        `;
    }).join('');
}

function filterProducts() {
    let filtered = [...deals];
    
    if (currentSort === 'popular') {
        filtered.sort((a, b) => b.votes - a.votes);
    } else if (currentSort === 'price-low') {
        filtered.sort((a, b) => a.currentPrice - b.currentPrice);
    }
    
    return filtered;
}

async function shareProduct(id, event) {
    const product = deals.find(p => p.id === id);
    if (!product) return;
    
    event.preventDefault();
    event.stopPropagation();
    
    const text = `Check out ${product.title} - ${formatPrice(product.currentPrice)}`;
    
    if (navigator.share) {
        try {
            await navigator.share({ title: 'VORA Finds', text, url: product.url });
        } catch (err) {
            copyToClipboard(product.url);
        }
    } else {
        copyToClipboard(product.url);
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('Link copied!');
    });
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}

function openModal(product) {
    const discount = calculateDiscount(product.currentPrice, product.originalPrice);
    const badgeColor = getBadgeColor(product.badge);
    
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">&times;</button>
            <img src="${product.image}" alt="${product.title}" class="modal-img">
            ${product.badge ? `<span class="modal-badge" style="background:${badgeColor}">${product.badge}</span>` : ''}
            <h2 class="modal-title">${product.title}</h2>
            <div class="modal-meta">
                ${discount ? `<span class="modal-discount">${discount}% off</span>` : ''}
            </div>
            <div class="modal-price">
                <span class="modal-current">${formatPrice(product.currentPrice)}</span>
                ${product.originalPrice ? `<span class="modal-original">${formatPrice(product.originalPrice)}</span>` : ''}
            </div>
            <p class="modal-votes">${product.votes} people liked this</p>
            <a href="${product.url}" class="modal-btn" target="_blank" rel="noopener sponsored">Buy Now</a>
        </div>
    `;
    document.body.appendChild(modal);
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
}

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('dark-mode') === 'true') {
        document.body.classList.add('dark-mode');
    }
    renderProducts(filterProducts());

    document.querySelectorAll('.sort-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentSort = btn.dataset.sort;
            renderProducts(filterProducts());
        });
    });

    const darkModeBtn = document.getElementById('dark-mode-toggle');
    if (darkModeBtn) {
        darkModeBtn.addEventListener('click', toggleDarkMode);
    }
});
