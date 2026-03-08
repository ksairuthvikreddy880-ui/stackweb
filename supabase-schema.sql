-- Supabase Database Schema for Stackweb Projects
-- Run this SQL in your Supabase SQL Editor
-- This will create the table to store customer project submissions

-- ============================================
-- DROP EXISTING TABLE (if you want to start fresh)
-- ============================================
-- Uncomment the line below if you want to recreate the table
-- DROP TABLE IF EXISTS projects CASCADE;

-- ============================================
-- CREATE PROJECTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS projects (
    -- Primary Key
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    
    -- Project Information
    website_type VARCHAR(50) NOT NULL CHECK (website_type IN ('professional', 'gaming', 'startup', 'api')),
    project_name VARCHAR(255) NOT NULL,
    project_description TEXT NOT NULL,
    
    -- Communication & Budget
    communication_method VARCHAR(50) NOT NULL CHECK (communication_method IN ('admin-panel', 'gmail', 'whatsapp', 'sms')),
    budget INTEGER NOT NULL CHECK (budget >= 5000),
    
    -- Customer Contact Details
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    company VARCHAR(255),
    
    -- Project Status & Tracking
    status VARCHAR(50) DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'completed', 'cancelled')),
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Additional metadata
    notes TEXT,
    priority VARCHAR(20) DEFAULT 'normal' CHECK (priority IN ('low', 'normal', 'high', 'urgent'))
);

-- ============================================
-- CREATE INDEXES FOR BETTER PERFORMANCE
-- ============================================
CREATE INDEX IF NOT EXISTS idx_projects_status ON projects(status);
CREATE INDEX IF NOT EXISTS idx_projects_created_at ON projects(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_projects_email ON projects(email);
CREATE INDEX IF NOT EXISTS idx_projects_website_type ON projects(website_type);
CREATE INDEX IF NOT EXISTS idx_projects_priority ON projects(priority);

-- ============================================
-- ENABLE ROW LEVEL SECURITY (RLS)
-- ============================================
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- ============================================
-- DROP EXISTING POLICIES (if recreating)
-- ============================================
DROP POLICY IF EXISTS "Allow anonymous inserts" ON projects;
DROP POLICY IF EXISTS "Allow public reads" ON projects;
DROP POLICY IF EXISTS "Allow public updates" ON projects;
DROP POLICY IF EXISTS "Allow authenticated deletes" ON projects;

-- ============================================
-- CREATE RLS POLICIES
-- ============================================

-- Policy 1: Allow anyone to submit projects (INSERT)
CREATE POLICY "Allow anonymous inserts" ON projects
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- Policy 2: Allow anyone to read all projects (SELECT)
-- Note: Admin panel has password protection, so this is safe
CREATE POLICY "Allow public reads" ON projects
    FOR SELECT
    TO anon, authenticated
    USING (true);

-- Policy 3: Allow anyone to update projects (UPDATE)
-- Note: Admin panel has password protection
CREATE POLICY "Allow public updates" ON projects
    FOR UPDATE
    TO anon, authenticated
    USING (true)
    WITH CHECK (true);

-- Policy 4: Allow authenticated users to delete projects (DELETE)
CREATE POLICY "Allow authenticated deletes" ON projects
    FOR DELETE
    TO authenticated
    USING (true);

-- ============================================
-- CREATE FUNCTION TO AUTO-UPDATE updated_at
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ============================================
-- CREATE TRIGGER FOR AUTO-UPDATE
-- ============================================
DROP TRIGGER IF EXISTS update_projects_updated_at ON projects;

CREATE TRIGGER update_projects_updated_at
    BEFORE UPDATE ON projects
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- CREATE VIEW FOR PROJECT STATISTICS
-- ============================================
CREATE OR REPLACE VIEW project_stats AS
SELECT 
    COUNT(*) as total_projects,
    COUNT(CASE WHEN status = 'new' THEN 1 END) as new_projects,
    COUNT(CASE WHEN status = 'in_progress' THEN 1 END) as in_progress_projects,
    COUNT(CASE WHEN status = 'completed' THEN 1 END) as completed_projects,
    COUNT(CASE WHEN status = 'cancelled' THEN 1 END) as cancelled_projects,
    AVG(budget) as average_budget,
    MAX(budget) as max_budget,
    MIN(budget) as min_budget,
    SUM(budget) as total_budget_value,
    COUNT(CASE WHEN website_type = 'professional' THEN 1 END) as professional_count,
    COUNT(CASE WHEN website_type = 'gaming' THEN 1 END) as gaming_count,
    COUNT(CASE WHEN website_type = 'startup' THEN 1 END) as startup_count,
    COUNT(CASE WHEN website_type = 'api' THEN 1 END) as api_count
FROM projects;

-- Grant access to the view
GRANT SELECT ON project_stats TO authenticated;

-- ============================================
-- INSERT SAMPLE DATA (OPTIONAL - FOR TESTING)
-- ============================================
-- Uncomment below to insert test data

/*
INSERT INTO projects (
    website_type, 
    project_name, 
    project_description, 
    communication_method, 
    budget, 
    full_name, 
    email, 
    phone, 
    company,
    status
) VALUES 
(
    'professional',
    'Corporate Website Redesign',
    'We need a modern, high-contrast website for our consulting firm with portfolio showcase and contact forms.',
    'gmail',
    50000,
    'Rajesh Kumar',
    'rajesh@example.com',
    '+91 9876543210',
    'Kumar Consulting',
    'new'
),
(
    'startup',
    'SaaS Platform Development',
    'Building a SaaS platform for project management with user authentication, dashboard, and payment integration.',
    'whatsapp',
    150000,
    'Priya Sharma',
    'priya@startup.com',
    '+91 9876543211',
    'TechStart Solutions',
    'new'
),
(
    'gaming',
    'Esports Team Website',
    'Need a gaming website with team profiles, tournament schedules, and live streaming integration.',
    'admin-panel',
    75000,
    'Amit Patel',
    'amit@gamers.com',
    '+91 9876543212',
    'Elite Gamers',
    'in_progress'
);
*/

-- ============================================
-- USEFUL QUERIES FOR ADMIN
-- ============================================

-- View all projects (most recent first)
-- SELECT * FROM projects ORDER BY created_at DESC;

-- View only new projects
-- SELECT * FROM projects WHERE status = 'new' ORDER BY created_at DESC;

-- View project statistics
-- SELECT * FROM project_stats;

-- Search projects by email
-- SELECT * FROM projects WHERE email ILIKE '%example.com%';

-- Get projects by budget range
-- SELECT * FROM projects WHERE budget BETWEEN 10000 AND 50000;

-- Count projects by type
-- SELECT website_type, COUNT(*) as count FROM projects GROUP BY website_type;

-- Get high priority projects
-- SELECT * FROM projects WHERE priority = 'high' OR priority = 'urgent';

-- ============================================
-- SUCCESS MESSAGE
-- ============================================
DO $$ 
BEGIN 
    RAISE NOTICE '✅ Database schema created successfully!';
    RAISE NOTICE '📊 Table: projects';
    RAISE NOTICE '🔒 RLS Policies: Enabled';
    RAISE NOTICE '📈 View: project_stats';
    RAISE NOTICE '⚡ Triggers: Auto-update timestamps';
    RAISE NOTICE '';
    RAISE NOTICE '🎯 Next Steps:';
    RAISE NOTICE '1. Test the connection using test-supabase.html';
    RAISE NOTICE '2. Submit a test project through project-form.html';
    RAISE NOTICE '3. View submissions in admin.html (password: stackweb@qwerty)';
END $$;
