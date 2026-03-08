# Supabase Integration Setup Guide

## 📋 Prerequisites
- Supabase account (free tier works fine)
- Your Stackweb project files

## 🚀 Step-by-Step Setup

### 1. Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in
3. Click "New Project"
4. Fill in:
   - **Name**: Stackweb Projects
   - **Database Password**: (create a strong password)
   - **Region**: Choose closest to your users
5. Click "Create new project"
6. Wait for project to be ready (~2 minutes)

### 2. Create Database Table

1. In your Supabase dashboard, go to **SQL Editor**
2. Click "New Query"
3. Copy the entire contents of `supabase-schema.sql`
4. Paste into the SQL editor
5. Click "Run" or press Ctrl+Enter
6. You should see "Success. No rows returned"

### 3. Get Your API Credentials

1. Go to **Settings** → **API**
2. Copy these two values:
   - **Project URL** (e.g., `https://xxxxx.supabase.co`)
   - **anon public** key (under "Project API keys")

### 4. Configure Your Project

1. Open `js/supabase-config.js`
2. Replace the placeholder values:

```javascript
const SUPABASE_CONFIG = {
    url: 'https://your-project-id.supabase.co', // Your Project URL
    anonKey: 'your-anon-key-here' // Your anon public key
};
```

3. Save the file

### 5. Test the Integration

1. Open your website in a browser
2. Navigate to the "Start a Project" form
3. Fill out all steps
4. Submit the form
5. Check browser console for success message
6. Go to Supabase dashboard → **Table Editor** → **projects**
7. You should see your submission!

## 📊 Database Schema

### Projects Table Structure

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key (auto-generated) |
| website_type | VARCHAR(50) | professional, gaming, startup, api |
| project_name | VARCHAR(255) | Name of the project |
| project_description | TEXT | Detailed description |
| communication_method | VARCHAR(50) | admin-panel, gmail, whatsapp, sms |
| budget | INTEGER | Project budget in rupees |
| full_name | VARCHAR(255) | Client's full name |
| email | VARCHAR(255) | Client's email |
| phone | VARCHAR(50) | Client's phone number |
| company | VARCHAR(255) | Company name (optional) |
| status | VARCHAR(50) | new, in_progress, completed |
| created_at | TIMESTAMP | Auto-generated timestamp |
| updated_at | TIMESTAMP | Auto-updated timestamp |

## 🔒 Security Features

### Row Level Security (RLS)
- ✅ Anonymous users can INSERT (submit forms)
- ✅ Authenticated users can SELECT, UPDATE, DELETE
- ✅ Public cannot read submissions (privacy protected)

### Policies Applied
1. **Allow anonymous inserts** - Anyone can submit a project
2. **Allow authenticated reads** - Only logged-in admins can view
3. **Allow authenticated updates** - Only admins can update status
4. **Allow authenticated deletes** - Only admins can delete

## 📈 Viewing Submissions

### Option 1: Supabase Dashboard
1. Go to **Table Editor**
2. Click on **projects** table
3. View all submissions with filters and search

### Option 2: SQL Queries
```sql
-- View all projects
SELECT * FROM projects ORDER BY created_at DESC;

-- View new projects only
SELECT * FROM projects WHERE status = 'new';

-- View project statistics
SELECT * FROM project_stats;

-- Search by email
SELECT * FROM projects WHERE email ILIKE '%example.com%';
```

## 🛠️ API Usage Examples

### Save a Project (JavaScript)
```javascript
const result = await window.supabaseService.saveProject({
    websiteType: 'professional',
    projectName: 'My Website',
    projectDescription: 'Description here',
    communication: 'gmail',
    budget: 25000,
    fullName: 'John Doe',
    email: 'john@example.com',
    phone: '+91 9876543210',
    company: 'Acme Inc'
});

if (result.success) {
    console.log('Saved:', result.data);
}
```

### Get All Projects
```javascript
const result = await window.supabaseService.getAllProjects();
if (result.success) {
    console.log('Projects:', result.data);
}
```

### Update Project Status
```javascript
const result = await window.supabaseService.updateProjectStatus(
    'project-id-here',
    'in_progress'
);
```

### Search Projects
```javascript
const result = await window.supabaseService.searchProjects('john');
```

## 🔧 Troubleshooting

### Issue: "Failed to initialize Supabase client"
**Solution**: Check that:
- Supabase CDN script is loaded in HTML
- `supabase-config.js` has correct URL and key
- No browser console errors

### Issue: "Insert failed" or "Permission denied"
**Solution**: 
- Verify RLS policies are created
- Check that "Allow anonymous inserts" policy exists
- Ensure table name matches ('projects')

### Issue: "Cannot read submissions"
**Solution**:
- You need to be authenticated to read
- Use Supabase dashboard to view
- Or create an admin panel with authentication

### Issue: Form submits but no data in Supabase
**Solution**:
- Open browser console (F12)
- Look for error messages
- Check network tab for failed requests
- Verify API credentials are correct

## 📱 Next Steps

### Create Admin Panel (Optional)
1. Create `admin.html` page
2. Add Supabase authentication
3. Display projects in a table
4. Add status update buttons
5. Add search and filter functionality

### Add Email Notifications (Optional)
1. Use Supabase Edge Functions
2. Send email when new project submitted
3. Notify client when status changes

### Add Real-time Updates (Optional)
```javascript
// Subscribe to new projects
supabaseClient
    .channel('projects')
    .on('postgres_changes', 
        { event: 'INSERT', schema: 'public', table: 'projects' },
        (payload) => {
            console.log('New project:', payload.new);
        }
    )
    .subscribe();
```

## 📚 Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
- [Row Level Security Guide](https://supabase.com/docs/guides/auth/row-level-security)
- [Supabase SQL Editor](https://supabase.com/docs/guides/database/overview)

## 💡 Tips

1. **Backup your data**: Export regularly from Table Editor
2. **Monitor usage**: Check Supabase dashboard for API usage
3. **Test thoroughly**: Submit test projects before going live
4. **Secure your keys**: Never commit real API keys to public repos
5. **Use environment variables**: For production deployments

## 🎯 Success Checklist

- [ ] Supabase project created
- [ ] Database schema executed
- [ ] API credentials configured
- [ ] Test submission successful
- [ ] Data visible in Supabase dashboard
- [ ] Browser console shows no errors
- [ ] RLS policies working correctly

---

Need help? Check the browser console for detailed error messages or contact Supabase support.
