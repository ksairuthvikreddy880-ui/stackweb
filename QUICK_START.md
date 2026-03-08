# 🚀 Quick Start - Supabase Integration

## ✅ Your Credentials (Already Configured)

- **Project URL**: `https://axcyusvthsoruuzjoxil.supabase.co`
- **Status**: ✅ Configured in `js/supabase-config.js`

## 📝 Next Steps (Do This Now!)

### 1. Test Connection (2 minutes)

Open in browser:
```
test-supabase.html
```

This will verify your Supabase connection is working.

### 2. Create Database Table (3 minutes)

1. Click this link: [Open Supabase SQL Editor](https://supabase.com/dashboard/project/axcyusvthsoruuzjoxil/editor)
2. Click "New Query"
3. Copy ALL content from `supabase-schema.sql`
4. Paste into SQL editor
5. Click "Run" (or press Ctrl+Enter)
6. You should see: "Success. No rows returned"

### 3. Test the Form (1 minute)

1. Open `project-form.html` in browser
2. Fill out all 6 steps
3. Click "Submit Project"
4. Check browser console (F12) for success message

### 4. View Your Data

Click: [View Projects Table](https://supabase.com/dashboard/project/axcyusvthsoruuzjoxil/editor)

You should see your test submission!

## 🎯 What's Working Now

✅ Supabase credentials configured
✅ Form will save to database
✅ Data is secure (RLS enabled)
✅ Anonymous submissions allowed
✅ Auto-timestamps working

## 📊 Database Structure

Your `projects` table has these fields:
- `id` - Auto-generated UUID
- `website_type` - professional/gaming/startup/api
- `project_name` - Project name
- `project_description` - Full description
- `communication_method` - Preferred contact method
- `budget` - Project budget (₹)
- `full_name` - Client name
- `email` - Client email
- `phone` - Client phone
- `company` - Company name (optional)
- `status` - new/in_progress/completed
- `created_at` - Submission timestamp
- `updated_at` - Last update timestamp

## 🔍 How to View Submissions

### Option 1: Supabase Dashboard
1. Go to [Table Editor](https://supabase.com/dashboard/project/axcyusvthsoruuzjoxil/editor)
2. Click "projects" table
3. See all submissions

### Option 2: SQL Query
```sql
SELECT * FROM projects ORDER BY created_at DESC;
```

### Option 3: Browser Console
```javascript
// Get all projects
const result = await window.supabaseService.getAllProjects();
console.log(result.data);
```

## 🛠️ Troubleshooting

### "Table doesn't exist"
→ Run the SQL schema from `supabase-schema.sql`

### "Permission denied"
→ RLS policies not created. Run the full schema again.

### "Connection failed"
→ Check internet connection and Supabase status

### Form submits but no data
→ Open browser console (F12) and check for errors

## 📱 Test Checklist

- [ ] Open `test-supabase.html`
- [ ] Connection test passes
- [ ] Run SQL schema in Supabase
- [ ] Test insert works
- [ ] Test read works
- [ ] Submit real form
- [ ] Data appears in Supabase dashboard

## 🎉 You're Done!

Once all tests pass, your project form will automatically save all submissions to Supabase!

## 📞 Support

If you need help:
1. Check browser console (F12) for errors
2. Check Supabase logs in dashboard
3. Review `SUPABASE_SETUP.md` for detailed guide

---

**Quick Links:**
- [Supabase Dashboard](https://supabase.com/dashboard/project/axcyusvthsoruuzjoxil)
- [SQL Editor](https://supabase.com/dashboard/project/axcyusvthsoruuzjoxil/editor)
- [Table Editor](https://supabase.com/dashboard/project/axcyusvthsoruuzjoxil/editor)
- [API Settings](https://supabase.com/dashboard/project/axcyusvthsoruuzjoxil/settings/api)
