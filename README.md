# APARK - Abuja Parks & Recreation

A modern web application for discovering and exploring parks and recreation centers in Abuja, Nigeria.

## Project Structure

```
apark/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── ui/
│   │       ├── button.jsx
│   │       ├── card.jsx
│   │       ├── input.jsx
│   │       └── badge.jsx
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Installation & Setup

### 1. Initialize the project

```bash
# Create new React app
npx create-react-app apark
cd apark

# Install dependencies
npm install lucide-react tailwindcss postcss autoprefixer
npm install -D @tailwindcss/forms

# Initialize Tailwind CSS
npx tailwindcss init -p
```

### 2. Configure Tailwind CSS

**tailwind.config.js:**
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

