# DishHub Showcase

Build a demo-ready mock MVP for "DishHub Foodies Corner" — a Bangladesh-focused food seller marketplace web app. Use React with clean, modern UI (Tailwind CSS). No real backend needed — use mock data and local state throughout.

---

## CORE CONCEPT

Three user roles: Seller, Buyer, Admin. Each has their own dashboard/flow. Use a simple role-switcher in the navbar for demo purposes.

---

## 1. BUYER FLOW

- Home page: hero banner + featured food listings (grid cards with dish image, name, price in BDT, seller name, rating)

- Browse/search page: filter by category (rice, snacks, drinks, etc.) and location (Dhaka, Chittagong, etc.)

- Dish detail page: image, description, price, seller info, Add to Cart button

- Cart page: list of items, quantity control, order summary, "Place Order (COD)" button

- Order confirmation page: simple success screen with order ID

## 2. SELLER FLOW

- Seller registration page: name, shop name, phone, area/location, food category

- Seller dashboard: stats cards (total orders, revenue in BDT, active listings)

- My Listings page: table of dishes with edit/delete, + Add New Dish button

- Add/Edit Dish form: dish name, description, price (BDT), category, image upload (mock)

- Orders page: list of incoming orders with status (Pending, Confirmed, Delivered)

## 3. ADMIN FLOW

- Admin dashboard: platform stats (total sellers, total buyers, total orders)

- Seller management: list of sellers with Approve / Suspend buttons

- Order overview: all orders across platform with status filter

---

## UI/UX REQUIREMENTS

- Clean, demo-ready design — not plain but not overdesigned

- Use a warm food-friendly color palette (oranges, greens, whites)

- Responsive layout (desktop-first is fine)

- Use mock data (at least 6 dishes, 3 sellers, 5 orders pre-populated)

- Bangladeshi context: prices in BDT (৳), local food names, local area names (Dhaka, Mirpur, Gulshan, etc.)

---

## NAVIGATION

- Top navbar with: DishHub logo, role switcher (Buyer / Seller / Admin), Cart icon (buyer only)

- Sidebar for Seller and Admin dashboards

---

## KEEP IT SIMPLE

- No authentication logic needed — role switcher is enough for demo

- No real payments — COD label only

- No real image uploads — use placeholder food images (via picsum or unsplash source URLs)

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/314c0beb-7c58-40ee-b96e-9e1fa0796311).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
