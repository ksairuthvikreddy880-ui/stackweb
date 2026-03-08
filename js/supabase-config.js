// Supabase Configuration
// Stackweb Project Database

const SUPABASE_CONFIG = {
    url: 'https://axcyusvthsoruuzjoxil.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4Y3l1c3Z0aHNvcnV1empveGlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5NjUwMjIsImV4cCI6MjA4ODU0MTAyMn0.yh0zagPHaG0BKJvp6P2QwbPreFR7E-fTONa7CPkTT6Y'
};

// Initialize Supabase client
let supabaseClient = null;

function initSupabase() {
    try {
        // Check if Supabase library is loaded
        if (typeof window.supabase === 'undefined') {
            console.error('❌ Supabase library not loaded. Check CDN connection.');
            return null;
        }
        
        // Create Supabase client
        supabaseClient = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
        console.log('✅ Supabase client initialized successfully');
        console.log('📍 Project URL:', SUPABASE_CONFIG.url);
        
        return supabaseClient;
    } catch (error) {
        console.error('❌ Error initializing Supabase:', error);
        return null;
    }
}

// Export for use in other files
window.getSupabaseClient = function() {
    if (!supabaseClient) {
        return initSupabase();
    }
    return supabaseClient;
};

// Wait for Supabase library to load, then initialize
function waitForSupabase() {
    if (typeof window.supabase !== 'undefined') {
        initSupabase();
    } else {
        console.log('⏳ Waiting for Supabase library to load...');
        setTimeout(waitForSupabase, 100);
    }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', waitForSupabase);
} else {
    waitForSupabase();
}
