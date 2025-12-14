# 🔐 SHA-256 Encrypt / Compare – Chrome Extension

A lightweight, offline Chrome extension to generate SHA-256 hashes and compare them securely.

Inspired by tools like **10015.io**, this extension provides a clean, dark UI and runs entirely in your browser — no data ever leaves your device.

---

## ✨ Features

- 🔑 Generate SHA-256 hashes instantly
- 🔍 Compare plain text with an existing SHA-256 hash
- 📴 Works completely offline
- 🎨 Clean dark UI inspired by modern security tools
- ⚡ Fast & lightweight (no external libraries)

---

## 🧩 How It Works

> ⚠️ **Important:** SHA-256 is a one-way hashing algorithm.  
> This extension does **not decrypt hashes** — it only generates and compares hashes correctly.

---

## 🛠 Installation (Developer Mode)

1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions`
3. Enable **Developer mode**
4. Click **Load unpacked**
5. Select the project folder

The extension icon will appear in your toolbar.

---

## 📁 Project Structure

sha256-chrome-extension/
├── icons/
│ ├── icon16.png
│ ├── icon48.png
│ └── icon128.png
├── popup.html
├── popup.css
├── popup.js
├── sha256.js
├── manifest.json
├── README.md
└── privacy.html


---

## 🔒 Security & Privacy

- No tracking
- No analytics
- No network requests
- No permissions required

All hashing is done using the **Web Crypto API** built into Chrome.

---

## 📜 License

MIT License — free to use, modify, and distribute.

---

## 🚀 Future Enhancements (Optional)

- File SHA-256 hashing
- Hash history
- Light/Dark toggle
- Copy & export options

---

Made with ❤️ for developers and security-conscious users.
