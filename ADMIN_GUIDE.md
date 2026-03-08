# 🔐 Admin Panel Guide

## 🚀 Quick Access

**URL**: Open `admin.html` in your browser
**Default Password**: `stackweb2024`

⚠️ **IMPORTANT**: Change the password in `admin.js` line 4!

## 🔑 Changing Admin Password

1. Open `admin.js`
2. Find line 4: `const ADMIN_PASSWORD = 'stackweb2024';`
3. Change to your secure password
4. Save the file

Example:
```javascript
const ADMIN_PASSWORD = 'MySecurePass123!';
```

## 📊 Features

### Dashboard Overview
- **Total Projects** - All submitted projects
- **New Projects** - Projects with "new" status
- **Average Budget** - Average project budget

### Project Management
- ✅ View all project submissions
- ✅ Filter by status (New, In Progress, Completed)
- ✅ Filter by type (Professional, Gaming, Startup, API)
- ✅ Search by name, email, or company
- ✅ View detailed project information
- ✅ Update project status
- ✅ Contact clients directly

### Project Details View
Click "View Details" on any project to see:
- Complete project information
- Client contact details
- Project description
- Budget and communication preferences
- Quick action buttons

## 🎯 How to Use

### 1. Login
1. Navigate to `admin.html`
2. Enter admin code: `stackweb2024` (or your custom password)
3. Click "Access Panel"

### 2. View Projects
- All projects are displayed in a table
- Click column headers to sort (future feature)
- Use filters to narrow down results

### 3. Filter Projects
- **Status Filter**: Show only New, In Progress, or Completed
- **Type Filter**: Filter by website type
- **Search**: Type to search by name, email, or company

### 4. View Project Details
1. Click "View Details" button
2. Modal opens with complete information
3. Review all project details
4. Take action if needed

### 5. Update Status
1. Open project details
2. Click status button:
   - "Mark In Progress"
   - "Mark Completed"
3. Confirm the action
4. Status updates in database

### 6. Contact Client
1. Open project details
2. Click "Contact Client"
3. Choose Email or Phone
4. Your email/phone app opens automatically

## 🔒 Security Features

### Password Protection
- Session-based authentication
- Password required on each browser session
- No cookies stored

### Data Privacy
- Only authenticated admins can view projects
- Supabase RLS (Row Level Security) enabled
- Anonymous users cannot read data

### Best Practices
1. **Change default password** immediately
2. **Don't share** admin password
3. **Use HTTPS** in production
4. **Log out** when done
5. **Clear browser** cache on shared computers

## 📱 Mobile Responsive

The admin panel works on:
- ✅ Desktop computers
- ✅ Tablets
- ✅ Mobile phones

## 🎨 UI Features

### Clean Design
- Dark theme matching Stackweb brand
- Glassmorphism effects
- Smooth animations
- Easy to read typography

### Status Badges
- 🔵 **New** - Cyan badge
- 🟠 **In Progress** - Orange badge
- 🟢 **Completed** - Green badge

### Type Badges
- 💼 Professional
- 🎮 Gaming
- 🚀 Startup
- 🔧 API & Backend

## 🔄 Refresh Data

Click the "Refresh" button to reload projects from database.

## 🚪 Logout

Click "Logout" button to:
- Clear session
- Return to login screen
- Secure your data

## 📊 Project Statistics

The dashboard shows:
- **Total Projects**: Count of all submissions
- **New Projects**: Unprocessed submissions
- **Average Budget**: Mean budget across all projects

## 🛠️ Troubleshooting

### Can't Login
- Check password in `admin.js`
- Clear browser cache
- Try incognito mode

### No Projects Showing
- Verify Supabase connection
- Check if SQL schema is created
- Look for errors in browser console (F12)

### "Permission Denied" Error
- Supabase RLS policies not set
- Run `supabase-schema.sql` again
- Check Supabase dashboard for errors

### Projects Not Loading
- Check internet connection
- Verify Supabase credentials in `js/supabase-config.js`
- Open browser console for error details

## 💡 Tips

1. **Bookmark** the admin page for quick access
2. **Use filters** to find specific projects quickly
3. **Update status** to track project progress
4. **Export data** from Supabase dashboard for backups
5. **Check regularly** for new submissions

## 🔗 Quick Links

- [Supabase Dashboard](https://supabase.com/dashboard/project/axcyusvthsoruuzjoxil)
- [View Projects Table](https://supabase.com/dashboard/project/axcyusvthsoruuzjoxil/editor)
- [SQL Editor](https://supabase.com/dashboard/project/axcyusvthsoruuzjoxil/editor)

## 📈 Future Enhancements

Possible additions:
- Email notifications for new projects
- Export to CSV/Excel
- Advanced analytics
- Project notes/comments
- File attachments
- Client portal access
- Team collaboration features

## 🎯 Workflow Example

1. **New Submission**
   - Client fills project form
   - Data saved to Supabase
   - Shows as "New" in admin panel

2. **Review Project**
   - Admin logs in
   - Views project details
   - Contacts client if needed

3. **Start Work**
   - Update status to "In Progress"
   - Client can be notified (manual)

4. **Complete Project**
   - Update status to "Completed"
   - Archive or keep for records

## 📞 Support

For technical issues:
1. Check browser console (F12)
2. Review Supabase logs
3. Check `SUPABASE_SETUP.md`
4. Verify all files are uploaded

---

**Remember**: Change the default password before going live! 🔐
