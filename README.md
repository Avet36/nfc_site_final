# NFC GO - Beyond the QR

Modern website for NFC technology integration, replacing QR codes for restaurants, hotels, bars, and salons.

## Features

- **Interactive Particle Background** - Animated particles that react to mouse movement
- **Multi-language Support** - English, Russian, Armenian
- **Modern Design** - Dark theme with teal/cyan gradients
- **Responsive** - Works on all devices
- **Smooth Animations** - Powered by Framer Motion

## Local Development

### Option 1: Using Python (Recommended)

**Windows:**
```bash
start-local.bat
```

**Mac/Linux:**
```bash
./start-local.sh
```

Or use Python directly:
```bash
python start-local.py
```

Then open http://localhost:8080 in your browser.

### Option 2: Using Node.js

```bash
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

### Option 3: Simple HTTP Server

If you have Python installed:
```bash
cd dist
python -m http.server 8080
```

Then open http://localhost:8080 in your browser.

## Building for Production

```bash
npm install
npm run build
```

The built files will be in the `dist/` folder.

## Project Structure

```
├── src/
│   ├── components/     # Reusable components
│   ├── sections/       # Page sections
│   ├── context/        # React context (language)
│   └── App.tsx         # Main app component
├── dist/               # Built files
├── public/             # Static assets
└── index.html          # Entry point
```

## Languages

- 🇬🇧 English (default)
- 🇷🇺 Russian
- 🇦🇲 Armenian

Use the language selector in the top navigation to switch languages.

## License

© 2025 NFC GO. All rights reserved.
