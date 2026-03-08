# Vercel Deployment Guide

## Prerequisites

1. GitHub account with your repository
2. Vercel account (sign up at https://vercel.com)
3. Supabase project set up

## Deployment Steps

### 1. Connect to Vercel

1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your GitHub repository: `ksairuthvikreddy880-ui/stackweb`
4. Vercel will automatically detect it as a static site

### 2. Configure Environment Variables

In Vercel project settings, add these environment variables:

**Go to: Project Settings → Environment Variables**

Add the following:

```
SUPABASE_URL=https://axcyusvthsoruuzjoxil.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4Y3l1c3Z0aHNvcnV1empveGlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5NjUwMjIsImV4cCI6MjA4ODU0MTAyMn0.yh0zagPHaG0BKJvp6P2QwbPreFR7E-fTONa7CPkTT6Y
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4Y3l1c3Z0aHNvcnV1empveGlsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3Mjk2NTAyMiwiZXhwIjoyMDg4NTQxMDIyfQ.cnz73t4NR5_l-vHSB4g4zUFD6K5hfOII0iwfIIW2ND0
ADMIN_PASSWORD=stackweb@qwerty
WHATSAPP_NUMBER=9100605066
ADMIN_NAME=Ruthvik
```

**Note:** For production, you should use different credentials than development!

### 3. Deploy

1. Click "Deploy"
2. Vercel will build and deploy your site
3. You'll get a URL like: `https://stackweb-xxx.vercel.app`

### 4. Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain (e.g., `stackweb.dev`)
3. Follow Vercel's DNS configuration instructions

## Project Configuration

### Files Created for Vercel:

1. **`vercel.json`** - Vercel configuration
   - Routes configuration
   - Security headers
   - Cache headers for assets

2. **`package.json`** - Updated with Vercel build scripts

3. **`.gitignore`** - Ensures `.env` is not committed

### Current Setup:

✅ Static site (no build process needed)
✅ All assets optimized
✅ Security headers configured
✅ Cache headers for performance
✅ Environment variables ready

## Post-Deployment

### 1. Test Your Site

Visit your Vercel URL and test:
- ✅ Homepage loads
- ✅ Navigation works
- ✅ Project form submission
- ✅ Admin panel login
- ✅ Portfolio page

### 2. Update Supabase CORS

Add your Vercel domain to Supabase allowed origins:

1. Go to Supabase Dashboard
2. Settings → API
3. Add your Vercel URL to allowed origins:
   - `https://stackweb-xxx.vercel.app`
   - `https://your-custom-domain.com` (if using custom domain)

### 3. Test Database Connection

1. Submit a test project through the form
2. Check admin panel to see if it appears
3. Verify WhatsApp contact works

## Continuous Deployment

Vercel automatically deploys when you push to GitHub:

```bash
git add .
git commit -m "Update website"
git push origin main
```

Vercel will automatically:
1. Detect the push
2. Build the project
3. Deploy to production
4. Update your live site

## Environment-Specific Deployments

### Production
- Branch: `main`
- URL: `https://stackweb.vercel.app`
- Environment: Production

### Preview (Optional)
- Any other branch
- URL: `https://stackweb-git-branch-name.vercel.app`
- Environment: Preview

## Troubleshooting

### Issue: Site not loading
**Solution:** Check Vercel deployment logs

### Issue: Database not connecting
**Solution:** 
1. Verify environment variables in Vercel
2. Check Supabase CORS settings
3. Verify Supabase keys are correct

### Issue: Admin panel not working
**Solution:**
1. Check browser console for errors
2. Verify `js/config.js` is loading
3. Check admin password in environment variables

### Issue: 404 errors
**Solution:** Check `vercel.json` routes configuration

## Performance

Vercel provides:
- ✅ Global CDN
- ✅ Automatic HTTPS
- ✅ Edge caching
- ✅ Compression (gzip/brotli)
- ✅ HTTP/2 support

Expected performance:
- Lighthouse Score: 95+
- First Contentful Paint: < 1s
- Time to Interactive: < 2s

## Security

Configured security headers:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`

## Monitoring

Vercel provides:
- Real-time logs
- Analytics
- Performance insights
- Error tracking

Access at: https://vercel.com/dashboard

## Cost

Vercel Free Tier includes:
- ✅ Unlimited deployments
- ✅ 100GB bandwidth/month
- ✅ Automatic HTTPS
- ✅ Custom domains
- ✅ Preview deployments

Perfect for this project!

## Support

- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
- Project Issues: https://github.com/ksairuthvikreddy880-ui/stackweb/issues

## Quick Deploy Button

Add this to your README.md for one-click deployment:

```markdown
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ksairuthvikreddy880-ui/stackweb)
```

## Next Steps

1. ✅ Push code to GitHub
2. ✅ Connect to Vercel
3. ✅ Add environment variables
4. ✅ Deploy
5. ✅ Test everything
6. ✅ Add custom domain (optional)
7. ✅ Share your site!

Your site will be live at: `https://stackweb.vercel.app` 🚀
