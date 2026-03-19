# 🌸 KawaTask

A kawaii task tracker where completing tasks earns gold and gems to spend on characters and accessories.

---

## How to deploy (no coding needed!)

### Step 1 — Install Node.js
Go to https://nodejs.org and download the **LTS** version. Install it like any normal app.

### Step 2 — Open Terminal
- On Mac: press Cmd+Space, type "Terminal", press Enter
- On Windows: press the Windows key, type "cmd", press Enter

### Step 3 — Navigate to this folder
Type this and press Enter (replace the path with wherever you saved this folder):
```
cd /path/to/kawatask
```

### Step 4 — Install dependencies
```
npm install
```

### Step 5 — Build the app
```
npm run build
```
This creates a `dist/` folder with your ready-to-deploy website.

### Step 6 — Deploy to Netlify
1. Go to https://netlify.com and create a free account
2. Click **"Add new site"** → **"Deploy manually"**
3. Drag and drop the **`dist`** folder into the upload box
4. Your site is live! Netlify gives you a free URL like `kawatask-abc123.netlify.app`

---

## To preview locally before deploying
```
npm run dev
```
Then open http://localhost:5173 in your browser.

---

## Folder structure
```
kawatask/
├── public/
│   └── images/
│       ├── characters/   ← character PNGs
│       ├── accessories/  ← accessory PNGs
│       └── backgrounds/  ← background images
├── src/
│   ├── App.jsx           ← main app code
│   └── main.jsx          ← entry point
├── index.html
├── package.json
├── vite.config.js
└── netlify.toml
```
