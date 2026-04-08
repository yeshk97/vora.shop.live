# VORA.shop.live - Skills

## Skill: Add New Product

When adding a product to `js/deals.js`:

```javascript
{
    id: 9,
    title: "Product Name",
    price: 499,
    originalPrice: 999,
    discount: "50% off",
    image: "https://images.unsplash.com/photo-ID?w=800&q=80",
    category: "tech|home|fashion",
    store: "Amazon.in|Flipkart",
    affiliateLink: "https://...",
    badge: "Trending|New|Best Seller|Deal"
}
```

Steps:
1. Add product to `js/deals.js` array
2. Update product count in `index.html` line 95
3. Test with `open index.html`

---

## Skill: Deploy to GitHub Pages

1. Check git status: `git status`
2. Add changes: `git add .`
3. Commit: `git commit -m "description"`
4. Push: `git push`
5. Wait 2-3 minutes for deployment

Site: https://yeshk97.github.io/vora.shop.live/

---

## Skill: Code Review Before Commit

Before committing, check:
1. No console.log statements left
2. All images load correctly
3. Links work (no dead href="#")
4. Mobile view looks okay
5. Run `git status` to see what changed

---

## Skill: Update Changelog

When committing significant changes:
1. Edit `CHANGELOG.md`
2. Add new version entry at top
3. Include: Added, Changed, Fixed, Removed items
4. Commit with descriptive message

Format:
```markdown
## [X.Y.Z] - YYYY-MM-DD
### Added
- Description
### Fixed
- Description
```

---

## Agent: Research Agent

**Purpose:** Find trending aesthetic products on Amazon/Flipkart

**When to use:** When you need to discover new products to add

**How it works:**
1. Use web search to find popular products in: tech, home, fashion
2. Look for products with good ratings (4+ stars)
3. Check for aesthetic/visual appeal (for Instagram audience)
4. Return: product names, current prices, categories, store links

---

## Agent: Sourcing Agent

**Purpose:** Extract product details from URLs

**When to use:** When you have a product URL and need full details

**How it works:**
1. Fetch product page from Amazon/Flipkart
2. Extract: title, current price, main image URL, rating
3. Verify image is accessible and aesthetic
4. Return structured product data

---

## Agent: QA Agent

**Purpose:** Validate product data before adding

**When to use:** Before adding any product to deals.js

**Checklist:**
- [ ] Affiliate link is valid (not broken)
- [ ] Image URL loads correctly
- [ ] Price is accurate
- [ ] Category is correct (tech/home/fashion)
- [ ] No console errors
- [ ] Mobile view renders correctly

---

## Agent: Editor Agent

**Purpose:** Add formatted products to deals.js

**When to use:** When QA passes and product is ready to add

**Format:**
```javascript
{
    id: N,
    title: "Product Name",
    image: "https://...",
    store: "Amazon.in",
    url: "affiliate-link",
    currentPrice: 599,
    originalPrice: 999,
    votes: 50,
    category: "home",
    badge: "New"
}
```

**Steps:**
1. Generate next ID (highest existing ID + 1)
2. Add product to js/deals.js
3. Run code review
4. Test locally

---

## Agent: Deploy Agent

**Purpose:** Push changes to GitHub Pages

**When to use:** After products are added and tested

**Steps:**
1. Run `git status` - review what changed
2. Run code review (see Skill: Code Review Before Commit)
3. `git add .`
4. `git commit -m "Add N new products"`
5. `git push`
6. Verify at https://yeshk97.github.io/vora.shop.live/
