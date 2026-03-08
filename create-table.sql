-- Simple SQL to create projects table
-- Copy and paste this into Supabase SQL Editor and click "Run"

-- Create the projects table
CREATE TABLE IF NOT EXISTS projects (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    website_type VARCHAR(50) NOT NULL,
    project_name VARCHAR(255) NOT NULL,
    project_description TEXT NOT NULL,
    communication_method VARCHAR(50) NOT NULL,
    budget INTEGER NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    company VARCHAR(255),
    status VARCHAR(50) DEFAULT 'new',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (submit projects)
CREATE POLICY "Allow public inserts" ON projects
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- Create policy to allow anyone to read (for admin panel)
CREATE POLICY "Allow public reads" ON projects
    FOR SELECT
    TO anon, authenticated
    USING (true);

-- Create policy to allow updates (for admin panel)
CREATE POLICY "Allow public updates" ON projects
    FOR UPDATE
    TO anon, authenticated
    USING (true)
    WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_projects_status ON projects(status);
CREATE INDEX IF NOT EXISTS idx_projects_created_at ON projects(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_projects_email ON projects(email);

-- Success message
SELECT 'Table created successfully! You can now submit projects.' AS message;
