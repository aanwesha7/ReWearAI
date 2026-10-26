# ReWear AI

Run: `npm install && npm run dev` · Tests: `npm test` · Build: `npm run build`

## Working screens
/, /shop (search, 4 filters, sort, grid/list, load more), /product/:id, /cart, /checkout (validated, simulated payment), /order/:id, /wishlist, /account (orders, listings with price edit/remove, saved outfits, profile, reset), /sell (4-step wizard, draft persistence), /ai-stylist, /visual-search, /impact, /about, /faq, 404.

## Honest limits
- AI Style Studio and Visual Search are local demo engines (tag scoring / attribute filtering). No model is called; no real AI or image similarity.
- Orders, listings, accounts live in localStorage only; no real payments, delivery or authentication.
- CO2e figure is an editable illustrative assumption, not verified.
- Not built: mobile filter drawer, size/brand/style filters, sell wizard split into 8 steps, live AI proxy, component tests (only pricing + outfit logic tests).
- Not verified: build/tests were not run (no network in authoring environment). Product imagery now uses locally bundled fashion-catalog image assets in public/images/products; a few product types share the closest available category image, and the leather belt remains an illustrated fallback. These are demo visuals, not photographs of the exact individual resale items.

## Coupons
REWEAR10 (10% off, min ₹1,500) · FIRSTTHRIFT (₹200 off, min ₹1,000). Shipping ₹99, free from ₹2,999.
