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
