# Amazon Clone JS

##  Features

- **Product Browsing**: Dynamically fetches and displays products from a backend API.
- **Shopping Cart**:
  - Add items with varying quantities.
  - Cart persists between sessions (using `localStorage`).
  - Update quantities or remove items directly from the cart.
- **Checkout Process**:
  - Review order summary.
  - Select delivery options.
  - Calculator for total cost including shipping and tax.
- **Responsive Design**: Optimized for both desktop and mobile viewing.

## 🛠️ Technologies Used

- **HTML5**: semantic structure for pages (`amazon.html`, `checkout.html`, `orders.html`).
- **CSS3**: Custom styling with Flexbox/Grid, separated into page-specific and shared files.
- **JavaScript (ES6+)**:
  - ES Modules for code organization (`import`/`export`).
  - `fetch` API and `XMLHttpRequest` for backend communication.
  - `localStorage` for data persistence.
- **Backend API**: Data fetched from `supersimplebackend.dev`.

## 📂 Project Structure

```
AmazonCloneJs/
├── amazon.html         # Main product listing page
├── checkout.html       # Cart and checkout page
├── orders.html         # Orders history page
├── tracking.html       # Order tracking page
├── backend/            # Backend related files (e.g. products.json)
├── data/               # Data management (cart.js, products.js)
├── images/             # Project assets
├── scripts/            # JavaScript logic
│   ├── amazon.js       # Main page logic
│   ├── checkout.js     # Checkout page logic
│   └── utils/          # Utility functions (money formatting, date)
└── styles/             # CSS files
    ├── pages/          # Page-specific styles
    └── shared/         # Shared styles (header, general)
```

##  How to Run

1. **Clone the repository** (or download usage files):
   ```bash
   git clone <repository-url>
   ```
2. **Open the project**:
   - Simply open `amazon.html` in your web browser.
   - For the best experience (and to avoid CORS issues depending on browser strictness), use a local development server like "Live Server" in VS Code.

## 📚 Learning Resources

- Based on the JavaScript Course by **SuperSimpleDev**.
- Concepts covered: DOM Manipulation, Event Listeners, API Fetching, ES Modules, MVC Pattern basics.

---

_Note: This is a frontend-focused project mimicking the Amazon experience._
