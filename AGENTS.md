# VORA.shop.live - Project Context

## What is this project?
An affiliate deals aggregator showcasing curated aesthetic products for the Indian market. Products are sourced from Amazon.in and Flipkart with affiliate links.

## Tech Stack
- Pure HTML, CSS, JavaScript (no frameworks)
- Google Fonts: Cormorant Garamond (headings), DM Sans (body)
- GitHub Pages for hosting

## Key Files
- `index.html` - Main HTML structure
- `css/style.css` - All styles
- `js/deals.js` - Product data array with affiliate links
- `js/app.js` - Filtering, sorting, and rendering logic

## Product Data Structure (in js/deals.js)
Each product has: id, title, price, originalPrice, discount, image, category, store, affiliateLink, badge

## Current Features
- Filter by category (All, Tech, Home, Fashion)
- Filter by price range (Under ₹500, ₹1000, ₹2000)
- Filter by store (Amazon, Flipkart)
- Sort by Featured, Price Low-High, Price High-Low
- Affiliate link tracking

## GitHub Pages
- Repository: https://github.com/yeshk97/vora.shop.live
- Live site: https://yeshk97.github.io/vora.shop.live/
- Or redirect custom domain shop.vora.live to this repo

## Workflow
1. Make changes locally
2. `git add .`
3. `git commit -m "description"`
4. `git push`
5. Auto-deploys to GitHub Pages (2-3 min)

## Future Plans (TODO)
- Add more products to deals.js
- Improve mobile responsiveness
- Add product detail pages
- Newsletter signup
- Social sharing features
- Analytics integration
