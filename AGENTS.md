# VORA Finds - Project Context

## Project Overview
An affiliate deals aggregator for Instagram traffic. Mobile-first site showcasing curated aesthetic products (under Rs 1000) from Amazon and Flipkart. Optimized for bio links.

**Brand Name:** VORA Finds
**Instagram:** @vora.finds
**Live Site:** https://yeshk97.github.io/vora.shop.live/

## Tech Stack
- Pure HTML, CSS, JavaScript (no frameworks)
- Google Font: Plus Jakarta Sans
- GitHub Pages hosting
- Plausible Analytics (placeholder - needs setup)

## Project Structure
```
vora.shop.live/
├── index.html          # Main HTML
├── css/
│   └── style.css      # All styles
├── js/
│   ├── app.js         # Rendering and filtering logic
│   └── deals.js        # Product data array
├── favicon.svg         # Favicon with gradient
├── robots.txt          # SEO
├── .github/
│   └── ISSUE_TEMPLATE/ # Bug/feature templates
├── AGENTS.md           # This file - AI context
├── CHANGELOG.md        # Version history
├── README.md
├── skills.md           # Workflow templates
└── LICENSE
```

## Design System
- **Primary Color:** Purple gradient (#667eea → #764ba2)
- **Background:** Light (#fcfcfc)
- **Text:** Dark (#1a1a1a)
- **Font:** Plus Jakarta Sans

## Product Data Structure (js/deals.js)
```javascript
{
    id: 1,
    title: "Product Name",
    image: "https://...",
    store: "Amazon.in",      // or "Flipkart"
    url: "affiliate-link",
    currentPrice: 599,
    originalPrice: 999,      // Not shown on site
    votes: 89,               // Higher = shows higher in list
    category: "home",        // tech, home, or fashion
    badge: "Bestseller"      // optional: Bestseller, Hot, New, Trending
}
```

## Current Features
- Ultra-clean mobile-first layout
- Quick category filters (All, Tech, Home, Fashion)
- Single-tap to Amazon/Flipkart
- Fixed footer with Instagram CTA
- "Curated" badge branding

## Site Structure (UI)
1. **Header:** Logo "VORA Finds" + "Curated" tag + Instagram link
2. **Hero:** "Handpicked Products" label + Title + Subtitle
3. **Filters:** Horizontal scroll chips
4. **Products:** Card with image, title, store pill, price, View button
5. **Footer:** Commission disclosure + Instagram follow

## Workflow - Adding a Product
1. Find product on Amazon/Flipkart
2. Get affiliate link from Amazon Associates / Flipkart Affiliate
3. Copy product image URL
4. Add to `js/deals.js`:
```javascript
{
    id: 13,
    title: "Product Name",
    image: "https://...",
    store: "Amazon.in",
    url: "YOUR_AFFILIATE_LINK",
    currentPrice: 599,
    originalPrice: 999,
    votes: 50,
    category: "home",
    badge: "New"
}
```
5. Commit and push

## Git Commands
```bash
git add .
git commit -m "Add new products"
git push
# Wait 2-3 minutes for GitHub Pages
```

## TODO
- [ ] Set up Plausible Analytics (replace placeholder script)
- [ ] Sign up for Amazon Associates
- [ ] Sign up for Flipkart Affiliate
- [ ] Add real affiliate links to products
- [ ] Add more products (target: 30-50)

## Important Notes
- All products link to Amazon.in or Flipkart
- Site is mobile-first (Instagram traffic)
- Keep it simple - one tap to buy
- Price shown without strikethrough original
- Brand voice: Clean, minimal, trustworthy
