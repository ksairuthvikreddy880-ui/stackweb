# Environment Setup Guide

## Configuration Files

This project uses a configuration system to manage sensitive credentials and settings.

### Files:

1. **`.env`** - Contains actual credentials (DO NOT commit to Git)
2. **`.env.example`** - Template file showing required variables
3. **`js/config.js`** - JavaScript configuration file that loads the values
4. **`.gitignore`** - Ensures `.env` is not committed to Git

## Setup Instructions

### 1. Environment Variables

The `.env` file contains:

```env
# Supabase Configuration
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Admin Configuration
ADMIN_PASSWORD=your_admin_password

# WhatsApp Configuration
WHATSAPP_NUMBER=your_whatsapp_number
ADMIN_NAME=your_name
```

### 2. Configuration File (js/config.js)

The `js/config.js` file loads these values and makes them available to the application:

```javascript
const CONFIG = {
    supabase: {
        url: 'your_url',
        anonKey: 'your_anon_key',
        serviceRoleKey: 'your_service_role_key'
    },
    admin: {
        password: 'your_password'
    },
    whatsapp: {
        number: 'your_number',
        adminName: 'your_name'
    }
};
```

### 3. How to Update Configuration

**Option 1: Edit js/config.js directly** (Current setup)
- Open `js/config.js`
- Update the values
- Save the file

**Option 2: Use .env file** (For future server-side deployment)
- Copy `.env.example` to `.env`
- Fill in your actual values
- Use a build tool to inject these into `config.js`

## Security Notes

⚠️ **IMPORTANT:**

1. **Never commit `.env` to Git** - It's already in `.gitignore`
2. **Never commit real credentials to `config.js`** - Use placeholder values in Git
3. **Service Role Key** - Only use in admin panel, never expose to public pages
4. **Anon Key** - Safe to use in public pages (has limited permissions)

## Current Configuration

The project currently has credentials in `js/config.js` for easy setup. For production:

1. Move sensitive values out of `config.js`
2. Use environment variables on your hosting platform
3. Use a build process to inject values at deployment time

## Deployment

### Vercel / Netlify:
Add environment variables in the dashboard:
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `ADMIN_PASSWORD`
- `WHATSAPP_NUMBER`
- `ADMIN_NAME`

### GitHub Pages:
Since GitHub Pages is static, keep values in `config.js` but:
1. Create a separate branch for deployment
2. Add real values only in that branch
3. Never merge deployment branch to main

## Getting Your Supabase Keys

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Go to Settings → API
4. Copy:
   - **Project URL** → `SUPABASE_URL`
   - **anon/public key** → `SUPABASE_ANON_KEY`
   - **service_role key** → `SUPABASE_SERVICE_ROLE_KEY` (keep secret!)

## Support

If you need help with configuration, check:
- `SUPABASE_SETUP.md` - Supabase setup guide
- `ADMIN_GUIDE.md` - Admin panel guide
- `QUICK_START.md` - Quick start guide
