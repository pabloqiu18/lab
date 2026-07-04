# youtube-focus

> Browser extension that removes distractions from YouTube at the request of my father.

[![License](https://img.shields.io/github/license/pabloqiu18/lab)](https://mit-license.org/)
![Status](https://img.shields.io/badge/Status-Active-brightgreen)
![Version](https://img.shields.io/badge/Version-v1.0.0-blue)

---

## Features

- Hide the recommended videos sidebar
- Hide the autoplay button
- Hide end screen recommendations
- Toggle each feature independently
- Persistent settings

---

## Tech Stack

- **TypeScript** - Type-safe development
- **Vite** - Build tool and development server
- **CRXJS** - Browser extension support for Vite
- **Chrome Extension Manifest V3**
- **Firefox WebExtensions (Manifest V3)**

---

## Installation

### Load the extension locally

#### For Chrome

1. Clone this repository.

```bash
git clone https://github.com/pabloqiu18/lab.git
```

2. Navigate to the project.

```bash
cd lab/youtube-focus
```

3. Install dependencies.

```bash
npm install
```

4. Build the extension.

```bash
npm run build:chrome
```

5. Open Chrome and navigate to:

```text
chrome://extensions
```

6. Enable **Developer mode** at the top-right of the screen.

7. Click **Load unpacked** and select the `dist/chrome` folder.

#### For Firefox

Install the extension from Mozilla Add-ons (AMO).

---

## Project Structure

```text
youtube-focus/
│
├── public/
├── src/
│   ├── content/
│   │   ├── features/
│   │   ├── main.ts
│   │   ├── focusMode.ts
│   │   ├── settings.ts
│   │   └── ...
│   │
│   ├── popup/
│   └── ...
│
├── manifest.ts
├── vite.config.ts
├── package.json
└── README.md
```

---

## Roadmap

- [x] Hide recommended sidebar
- [x] Disable autoplay
- [x] Hide autoplay toggle
- [x] Hide end screen recommendations
- [ ] Hide comments
- ...

---

## License

This project is licensed under the [MIT License](https://mit-license.org/).