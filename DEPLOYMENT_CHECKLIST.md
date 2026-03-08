# Deployment Checklist ✅

## Pre-Deployment

- [x] Code pushed to GitHub
- [x] Environment configuration set up
- [x] Vercel configuration created
- [x] Documentation completed
- [x] .gitignore configured

## Vercel Deployment Steps

### 1. Create Vercel Account
- [ ] Go to https://vercel.com
- [ ] Sign up with GitHub account

### 2. Import Project
- [ ] Click "Add New Project"
- [ ] Select repository: `ksairuthvikreddy880-ui/stackweb`
- [ ] Click "Import"

### 3. Configure Project
- [ ] Framework Preset: Other (auto-detected)
- [ ] Root Directory: `./`
- [ ] Build Command: (leave empty - static site)
- [ ] Output Directory: (leave empty)

### 4. Add Environment Variables

Click "Environment Variables" and add:

```
Name: SUPABASE_URL
Value: https://axcyusvthsoruuzjoxil.supabase.co

Name: SUPABASE_ANON_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4Y3l1c3Z0aHNvcnV1empveGlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5NjUwMjIsImV4cCI6MjA4ODU0MTAyMn0.yh0zagPHaG0BKJvp6P2QwbPreFR7E-fTONa7CPkTT6Y

Name: SUPABASE_SERVICE_ROLE_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4Y3l1c3Z0aHNvcnV1empveGlsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3Mjk2NTAyMiwiZXhwIjoyMDg4NTQxMDIyfQ.cnz73t4NR5_l-vHSB4g4zUFD6K5hfOII0iwfIIW2ND0

Name: ADMIN_PASSWORD
Value: stackweb@qwerty

Name: WHATSAPP_NUMBER
Value: 9100605066

Name: ADMIN_NAME
Value: Ruthvik
```

- [ ] All environment variables added

### 5. Deploy
- [ ] Click "Deploy"
- [ ] Wait for deployment to complete (1-2 minutes)
- [ ] Get your deployment URL

## Post-Deployment

### 1. Test Website
- [ ] Visit your Vercel URL
- [ ] Test homepage loads
- [ ] Test navigation works
- [ ] Test all pages load correctly

### 2. Test Project Form
- [ ] Go to "Start Your Project"
- [ ] Fill out the form
- [ ] Submit project
- [ ] Check for success message

### 3. Test Admin Panel
- [ ] Go to `/admin.html`
- [ ] Login with password: `stackweb@qwerty`
- [ ] Verify submitted project appears
- [ ] Test status update
- [ ] Test WhatsApp contact button

### 4. Update Supabase CORS
- [ ] Go to Supabase Dashboard
- [ ] Settings → API
- [ ] Add Vercel URL to allowed origins
- [ ] Save changes

### 5. Custom Domain (Optional)
- [ ] Go to Vercel Project Settings
- [ ] Domains → Add Domain
- [ ] Enter your domain (e.g., stackweb.dev)
- [ ] Follow DNS configuration instructions
- [ ] Wait for DNS propagation (5-30 minutes)

### 6. Performance Check
- [ ] Run Lighthouse audit
- [ ] Check page load speed
- [ ] Verify all assets loading
- [ ] Test on mobile device

## Troubleshooting

### If deployment fails:
1. Check Vercel deployment logs
2. Verify all files are committed to Git
3. Check vercel.json syntax
4. Contact Vercel support

### If database not working:
1. Verify environment variables in Vercel
2. Check Supabase CORS settings
3. Run SQL schema in Supabase
4. Check browser console for errors

### If admin panel not loading:
1. Check js/config.js is loading
2. Verify admin password
3. Check browser console
4. Clear browser cache

## Success Criteria

✅ Website loads on Vercel URL
✅ All pages accessible
✅ Project form submits successfully
✅ Admin panel shows submitted projects
✅ WhatsApp contact works
✅ No console errors
✅ Lighthouse score > 90

## Your Deployment URLs

- **Production**: https://stackweb-xxx.vercel.app
- **Admin Panel**: https://stackweb-xxx.vercel.app/admin.html
- **Project Form**: https://stackweb-xxx.vercel.app/project-form.html

## Next Steps After Deployment

1. Share your website URL
2. Test with real users
3. Monitor Vercel analytics
4. Set up custom domain
5. Add more features

## Support

- Vercel Docs: https://vercel.com/docs
- Supabase Docs: https://supabase.com/docs
- GitHub Issues: https://github.com/ksairuthvikreddy880-ui/stackweb/issues

---

🚀 Ready to deploy? Follow the checklist above!
