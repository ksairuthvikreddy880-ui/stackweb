// Supabase Database Service
// Handles all database operations for project submissions

class SupabaseService {
    constructor() {
        this.client = null;
        this.tableName = 'projects'; // Your Supabase table name
        this.initialized = false;
    }

    // Initialize the service
    init() {
        try {
            this.client = window.getSupabaseClient();
            if (!this.client) {
                console.error('Failed to initialize Supabase client');
                return false;
            }
            this.initialized = true;
            console.log('✅ Supabase Service initialized');
            return true;
        } catch (error) {
            console.error('Error initializing Supabase service:', error);
            return false;
        }
    }

    // Ensure client is initialized before operations
    ensureInitialized() {
        if (!this.initialized || !this.client) {
            console.log('🔄 Attempting to initialize Supabase service...');
            const result = this.init();
            if (!result) {
                console.error('❌ Failed to initialize in ensureInitialized');
            }
            return result;
        }
        return true;
    }

    // Save project submission
    async saveProject(projectData) {
        if (!this.ensureInitialized()) {
            return { success: false, error: 'Supabase service not initialized' };
        }

        try {
            const { data, error } = await this.client
                .from(this.tableName)
                .insert([
                    {
                        website_type: projectData.websiteType,
                        project_name: projectData.projectName,
                        project_description: projectData.projectDescription,
                        communication_method: projectData.communication,
                        budget: projectData.budget,
                        full_name: projectData.fullName,
                        email: projectData.email,
                        phone: projectData.phone,
                        company: projectData.company || null,
                        status: 'new',
                        created_at: new Date().toISOString()
                    }
                ])
                .select();

            if (error) {
                console.error('Error saving project:', error);
                return { success: false, error: error.message };
            }

            console.log('✅ Project saved successfully:', data);
            return { success: true, data: data[0] };
        } catch (error) {
            console.error('Exception saving project:', error);
            return { success: false, error: error.message };
        }
    }

    // Get all projects (for admin panel)
    async getAllProjects() {
        if (!this.ensureInitialized()) {
            return { success: false, error: 'Supabase service not initialized. Please check your configuration.' };
        }

        try {
            const { data, error } = await this.client
                .from(this.tableName)
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                console.error('Error fetching projects:', error);
                return { success: false, error: error.message };
            }

            return { success: true, data };
        } catch (error) {
            console.error('Exception fetching projects:', error);
            return { success: false, error: error.message };
        }
    }

    // Get project by ID
    async getProjectById(id) {
        if (!this.ensureInitialized()) {
            return { success: false, error: 'Supabase service not initialized' };
        }

        try {
            const { data, error } = await this.client
                .from(this.tableName)
                .select('*')
                .eq('id', id)
                .single();

            if (error) {
                console.error('Error fetching project:', error);
                return { success: false, error: error.message };
            }

            return { success: true, data };
        } catch (error) {
            console.error('Exception fetching project:', error);
            return { success: false, error: error.message };
        }
    }

    // Update project status
    async updateProjectStatus(id, status) {
        if (!this.ensureInitialized()) {
            return { success: false, error: 'Supabase service not initialized' };
        }

        try {
            const { data, error } = await this.client
                .from(this.tableName)
                .update({ status, updated_at: new Date().toISOString() })
                .eq('id', id)
                .select();

            if (error) {
                console.error('Error updating project:', error);
                return { success: false, error: error.message };
            }

            return { success: true, data: data[0] };
        } catch (error) {
            console.error('Exception updating project:', error);
            return { success: false, error: error.message };
        }
    }

    // Delete project
    async deleteProject(id) {
        if (!this.ensureInitialized()) {
            return { success: false, error: 'Supabase service not initialized' };
        }

        try {
            const { error } = await this.client
                .from(this.tableName)
                .delete()
                .eq('id', id);

            if (error) {
                console.error('Error deleting project:', error);
                return { success: false, error: error.message };
            }

            return { success: true };
        } catch (error) {
            console.error('Exception deleting project:', error);
            return { success: false, error: error.message };
        }
    }

    // Get projects by status
    async getProjectsByStatus(status) {
        if (!this.ensureInitialized()) {
            return { success: false, error: 'Supabase service not initialized' };
        }

        try {
            const { data, error } = await this.client
                .from(this.tableName)
                .select('*')
                .eq('status', status)
                .order('created_at', { ascending: false });

            if (error) {
                console.error('Error fetching projects by status:', error);
                return { success: false, error: error.message };
            }

            return { success: true, data };
        } catch (error) {
            console.error('Exception fetching projects by status:', error);
            return { success: false, error: error.message };
        }
    }

    // Search projects
    async searchProjects(searchTerm) {
        if (!this.ensureInitialized()) {
            return { success: false, error: 'Supabase service not initialized' };
        }

        try {
            const { data, error } = await this.client
                .from(this.tableName)
                .select('*')
                .or(`project_name.ilike.%${searchTerm}%,full_name.ilike.%${searchTerm}%,email.ilike.%${searchTerm}%`)
                .order('created_at', { ascending: false });

            if (error) {
                console.error('Error searching projects:', error);
                return { success: false, error: error.message };
            }

            return { success: true, data };
        } catch (error) {
            console.error('Exception searching projects:', error);
            return { success: false, error: error.message };
        }
    }
}

// Create singleton instance and initialize immediately
window.supabaseService = new SupabaseService();

// Auto-initialize when script loads
(function() {
    console.log('📦 Creating Supabase Service instance...');
    
    function tryInit() {
        if (window.getSupabaseClient) {
            const client = window.getSupabaseClient();
            if (client) {
                window.supabaseService.init();
                console.log('✅ Supabase Service initialized and ready');
            } else {
                console.log('⏳ Waiting for Supabase client...');
                setTimeout(tryInit, 100);
            }
        } else {
            console.log('⏳ Waiting for getSupabaseClient function...');
            setTimeout(tryInit, 100);
        }
    }
    
    // Start initialization
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', tryInit);
    } else {
        tryInit();
    }
})();

export default SupabaseService;
