# Stackweb - Premium Web Design Agency

A modern, high-contrast Single Page Application (SPA) showcasing premium web design services.

## Features

- ✨ Modern SPA architecture with vanilla JavaScript
- 🎨 High-contrast dark mode design
- 🌊 Smooth animations and transitions
- 📱 Fully responsive design
- 🎯 Modular component structure
- ⚡ Fast and lightweight

## Project Structure

```
stackweb/
├── index.html              # Main HTML file
├── assets/                 # Images and media files
│   ├── hero_bg.png
│   ├── fintech_v2.png
│   ├── ecommerce.png
│   ├── saas.png
│   └── startup.png
├── css/                    # Modular CSS files
│   ├── base.css           # Variables, resets, typography
│   ├── layout.css         # Layout and structure
│   ├── navigation.css     # Navigation styles
│   ├── components.css     # Reusable components
│   ├── pages.css          # Page-specific styles
│   ├── footer.css         # Footer styles
│   └── responsive.css     # Media queries
└── js/                     # JavaScript modules
    ├── app.js             # Main application entry
    ├── components.js      # Page components/templates
    ├── router.js          # SPA routing logic
    ├── navigation.js      # Navigation functionality
    └── animations.js      # Animation controllers
```

## Pages

1. **Home** - Hero section with services overview
2. **Designs** - Portfolio showcase
3. **About** - Company information and stats
4. **Help** - FAQ and contact form

## Technologies Used

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox)
- Vanilla JavaScript (ES6 Modules)
- Intersection Observer API
- CSS Animations

## Getting Started

1. Clone or download the repository
2. Open `index.html` in a modern web browser
3. For development, use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

### Colors
Edit CSS variables in `css/base.css`:
```css
:root {
    --bg-dark: #050505;
    --accent-cyan: #00f0ff;
    --accent-violet: #8a2be2;
}
```

### Content
Edit page templates in `js/components.js`

### Animations
Modify animation settings in `js/animations.js`

## Performance

- Lazy loading for images
- CSS animations (GPU accelerated)
- Minimal JavaScript bundle
- Optimized asset loading

## License

© 2026 Stackweb. All rights reserved.
