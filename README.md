# Stackweb - Premium Web Design Agency

A modern, high-contrast Single Page Application (SPA) showcasing premium web design services with admin panel and Supabase integration.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ksairuthvikreddy880-ui/stackweb)

## Features

- ✨ Modern SPA architecture with vanilla JavaScript
- 🎨 High-contrast dark mode design
- 🌊 Smooth animations and transitions
- 📱 Fully responsive design
- 🎯 Modular component structure
- ⚡ Fast and lightweight
- 🔐 Admin panel with password protection
- 💾 Supabase database integration
- 📋 Multi-step project submission form
- 💬 WhatsApp integration for client contact

## Quick Start

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/ksairuthvikreddy880-ui/stackweb.git
   cd stackweb
   ```

2. Open `index.html` in a browser or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

3. Visit `http://localhost:8000`

### Deploy to Vercel

1. Click the "Deploy with Vercel" button above
2. Connect your GitHub account
3. Add environment variables (see `VERCEL_DEPLOYMENT.md`)
4. Deploy!

## Project Structure

```
stackweb/
├── index.html              # Main HTML file
├── admin.html              # Admin panel
├── project-form.html       # Project submission form
├── portfolio.html          # Portfolio showcase
├── vercel.json            # Vercel configuration
├── assets/                 # Images and media files
├── css/                    # Modular CSS files
├── js/                     # JavaScript modules
│   ├── config.js          # Configuration (Supabase, etc.)
│   ├── app.js             # Main application
│   ├── supabase-service.js # Database service
│   └── ...
└── docs/                   # Documentation
    ├── VERCEL_DEPLOYMENT.md
    ├── SUPABASE_SETUP.md
    ├── ADMIN_GUIDE.md
    └── ENV_SETUP.md
```

## Pages

1. **Home** - Hero section with services overview
2. **Designs** - Portfolio showcase (Coming Soon)
3. **About** - Company information and stats
4. **Help** - FAQ and contact form
5. **Admin** - Project management dashboard (Password protected)
6. **Project Form** - Multi-step project submission

## Technologies Used

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox)
- Vanilla JavaScript (ES6 Modules)
- Supabase (Database & Authentication)
- Vercel (Hosting & Deployment)

## Configuration

### Environment Variables

Create a `js/config.js` file with:

```javascript
const CONFIG = {
    supabase: {
        url: 'your_supabase_url',
        anonKey: 'your_anon_key',
        serviceRoleKey: 'your_service_role_key'
    },
    admin: {
        password: 'your_admin_password'
    },
    whatsapp: {
        number: 'your_whatsapp_number',
        adminName: 'your_name'
    }
};
```

See `ENV_SETUP.md` for detailed configuration instructions.

## Database Setup

1. Create a Supabase project
2. Run the SQL from `create-table.sql` in Supabase SQL Editor
3. Update configuration with your Supabase credentials

See `SUPABASE_SETUP.md` for detailed setup instructions.

## Admin Panel

Access the admin panel at `/admin.html`

Default password: `stackweb@qwerty` (change in `js/config.js`)

Features:
- View all project submissions
- Filter by status and type
- Update project status
- Contact clients via WhatsApp
- Real-time statistics

See `ADMIN_GUIDE.md` for detailed admin guide.

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

See `VERCEL_DEPLOYMENT.md` for step-by-step guide.

### Other Platforms

- **Netlify**: Works out of the box
- **GitHub Pages**: Static hosting (update config.js with credentials)
- **Cloudflare Pages**: Zero-config deployment

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Optimized assets and lazy loading
- GPU-accelerated animations

## Security

- Environment variables for sensitive data
- Row Level Security (RLS) in Supabase
- Password-protected admin panel
- Security headers configured
- HTTPS enforced

## Documentation

- 📖 [Vercel Deployment Guide](VERCEL_DEPLOYMENT.md)
- 🗄️ [Supabase Setup Guide](SUPABASE_SETUP.md)
- 🔐 [Admin Panel Guide](ADMIN_GUIDE.md)
- ⚙️ [Environment Setup](ENV_SETUP.md)
- 🚀 [Quick Start Guide](QUICK_START.md)
- ⚡ [Performance Guide](PERFORMANCE.md)

## Support

For issues or questions:
- GitHub Issues: https://github.com/ksairuthvikreddy880-ui/stackweb/issues
- Email: contact@stackweb.dev

## License

© 2026 Stackweb. All rights reserved.

## Author

**Ruthvik** - [Instagram](https://www.instagram.com/stackweb.dev)

---

Made with ❤️ by Stackweb
