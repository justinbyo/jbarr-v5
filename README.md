# jbarr-v5 Portfolio Site

Personal portfolio site for Justin Barr Young - Product Manager & Creative Technologist.

## Performance Optimizations

This site has been optimized for performance with the following improvements:

### JavaScript Optimizations
- **Removed debug logging**: Eliminated 16 console.log statements that ran on every page load
- **Streamlined code**: Reduced JavaScript from 83 to 40 lines (52% reduction)
- **Optimized DOM operations**: Using `classList.toggle()` for cleaner, faster theme switching
- **Efficient caching**: Single DOM element references instead of repeated queries

### CSS Optimizations
- **Minified production CSS**: Using compressed Sass output reduces file size
- **Consolidated media queries**: Removed duplicate dark mode styles
- **Dark theme class support**: Efficient JavaScript-driven theme toggle

### HTML Optimizations
- **Preconnect hints**: Faster loading of Google Fonts with `rel="preconnect"`
- **Font display optimization**: Added `&display=swap` to prevent invisible text during font loading
- **Resource hints**: Browser can establish connections earlier in page load

### Build Tooling
- **CSS minification**: Production build script for compressed styles
- **.gitignore**: Excludes node_modules and build artifacts from version control

## Development

### Prerequisites
- Node.js and npm

### Installation
```bash
npm install
```

### Development Server
```bash
# Start Sass watcher (watches for SCSS changes and compiles)
npm run sass

# Start live-server (in a separate terminal)
npm run start
```

### Production Build
```bash
# Build minified CSS for production
npm run sass:build
```

## Project Structure
```
/docs          - Production site files (served via GitHub Pages)
  /css         - Compiled CSS
  /images      - Site images
  /js          - JavaScript files
  index.html   - Main HTML file
/scss          - Source Sass files
  _main.scss   - Main styles
  _variables.scss - CSS variables
  styles.scss  - Entry point
```

## Performance Metrics

### Improvements Made
- **52% reduction** in JavaScript file size (83 → 40 lines)
- **Zero debug overhead** from console.log statements
- **Faster font loading** with preconnect and font-display
- **Minified CSS** for production deployment
- **Optimized theme switching** with consolidated styles

### Loading Performance
- Preconnect hints reduce DNS lookup and connection time
- Font-display: swap prevents FOIT (Flash of Invisible Text)
- Minified CSS reduces download time
- Optimized JavaScript reduces parse and execution time
