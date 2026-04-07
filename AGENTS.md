# VORA.shop.live - Project Context

## What is this project?
An affiliate deals aggregator for Instagram traffic. Mobile-first site showcasing curated aesthetic products (under ₹1000) from Amazon.in and Flipkart. Optimized for bio links.

## Tech Stack
- Pure HTML, CSS, JavaScript (no frameworks)
- Google Font: DM Sans
- GitHub Pages hosting

## Project Structure
```
vora.shop.live/
├── index.html          # Main HTML (mobile-first)
├── css/
│   └── style.css       # All styles
├── js/
│   ├── app.js          # Rendering and filtering logic
│   └── deals.js        # Product data array
├── assets/images/      # Future: local images
├── docs/               # Documentation
├── AGENTS.md           # AI context
├── CHANGELOG.md        # Version history
├── README.md
├── skills.md           # Workflow templates
└── LICENSE
```

## Product Data Structure (js/deals.js)
```javascript
{
    id: 1,
    title: "Product Name",
    image: "https://...",
    store: "Amazon.in",      // or "Flipkart"
    url: "affiliate-link",
    currentPrice: 599,
    originalPrice: 999,
    votes: 89,               // Higher = shows higher in list
    category: "home",        // tech, home, or fashion
    badge: "Bestseller"      // optional: Bestseller, Hot, New, Trending
}
```

## Current Features
- Mobile-first single column layout
- Quick category filters (All, Tech, Home, Fashion)
- Trust-building social proof section
- Verified product badges
- Star ratings and vote counts
- Fixed footer with Instagram CTA

## Design Goals
- Trust building for customers
- Easy one-thumb navigation
- Fast loading for mobile
- Direct to purchase (Amazon/Flipkart links)

## GitHub Pages
- Repository: https://github.com/yeshk97/vora.shop.live
- Live: https://yeshk97.github.io/vora.shop.live/
- Custom domain: shop.vora.live (redirect)

## Git Workflow
1. `git add .`
2. `git commit -m "description"`
3. `git push`
4. Wait 2-3 min for deployment

## TODO
- [ ] Add real affiliate links to products
- [ ] Add more products
- [ ] Newsletter signup
- [ ] Analytics (Google Analytics/Plausible)
